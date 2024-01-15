// ServiceCard.tsx
import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    Tooltip,
    useTheme,
} from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react';


const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 20,
    (x - rect.left - rect.width / 2) / 20,
    1.1
];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({
    title,
    description,
    price,
    extras,
    onLearnMore,
    onBookNow,
}) => {
    const theme = useTheme();

    const [springProps, api] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    const bind = useGesture({
        onMove: ({ xy, event }) => {
            const rect = (event.target as HTMLElement).getBoundingClientRect();
            api.start({ xys: calc(xy[0], xy[1], rect) });
        },
        onHover: ({ hovering }) => {
            if (!hovering) {
                api.start({ xys: [0, 0, 1] });
            }
        }
    });

    return (
        <animated.div
            style={{
                transform: springProps.xys.to(trans),
                maxWidth: 345,
                margin: 2,
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
            {...bind()}
        >
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="Body1" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                        {`Starting at ${price}`}
                    </Typography>
                    {extras.map((extra, index) => (
                        <Tooltip key={index} title={extra.tooltip} arrow>
                            <Typography variant="body3">{extra.text}</Typography>
                        </Tooltip>
                    ))}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onLearnMore}>
                        Learn More
                    </Button>
                    <Button size="small" color="primary" onClick={onBookNow}>
                        Book Now
                    </Button>
                </CardActions>
            </Card>
        </animated.div>
    );
};

export default ServiceCard;