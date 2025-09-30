import {
    // eslint-disable-next-line no-unused-vars
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";




import './Docks.css'


function useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring
) {
    const mouseDistance = useTransform(mouseX, (val) => {
        if (typeof val !== "number" || isNaN(val)) return 0;
        const rect = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: baseItemSize,
        };
        return val - rect.x - baseItemSize / 2;
    });

    const targetSize = useTransform(
        mouseDistance,
        [-distance, 0, distance],
        [baseItemSize, magnification, baseItemSize]
    );

    return useSpring(targetSize, spring);
}

function DockItem({
    icon,
    label,
    link,
    mouseX,
    baseItemSize,
    magnification,
    distance,
    spring,
    badgeCount,
}) {
    const ref = useRef(null);
    const isHovered = useMotionValue(0);
    const size = useDockItemSize(
        mouseX,
        baseItemSize,
        magnification,
        distance,
        ref,
        spring
    );
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        const unsubscribe = isHovered.on("change", (value) =>
            setShowLabel(value === 1)
        );
        return () => unsubscribe();
    }, [isHovered]);

    return (
        <a
            href={link}
            className="dock-item-link"
            target={link.startsWith('#') ? '_self' : '_blank'}
            // rel={link.startsWith('#') ? '' : 'noopener noreferrer'}
            // download={link.endsWith('.pdf')}
        >
            <motion.div
                ref={ref}
                style={{ width: size, height: size }}
                // onHoverStart={() => isHovered.set(1)}
                // onHoverEnd={() => isHovered.set(0)}
                // onFocus={() => isHovered.set(1)}
                // onBlur={() => isHovered.set(0)}
                className="dock-item"
                // tabIndex={0}
                // role="button"
                // aria-haspopup="true"
            >
                <div className="dock-item-icon">{icon}</div>
                {badgeCount !== undefined && badgeCount > 0 && (
                    <span className="dock-badge">
                        {badgeCount > 99 ? "99+" : badgeCount}
                    </span>
                )}
                <AnimatePresence>
                    {showLabel && (
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="dock-tooltip"
                            style={{ x: "-50%" }}
                            role="tooltip"
                        >
                            {label}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </a>

    );
}

export default function Dock({
    items,
    className = "",
    spring = { mass: 0.1, stiffness: 150, damping: 12 },
    magnification = 70,
    distance = 200,
    panelHeight = 64,
    dockHeight = 256,
    baseItemSize = 50,
}) {
    const mouseX = useMotionValue(Infinity);
    const isHovered = useMotionValue(0);

    const maxHeight = useMemo(
        () => Math.max(dockHeight, magnification + magnification / 2 + 4),
        [magnification, dockHeight]
    );

    const animatedHeight = useSpring(
        useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
        spring
    );

    return (
        <>
            <motion.div
                style={{ height: animatedHeight }}
                className="dock-wrapper"
            >
                <motion.div
                    // onMouseMove={({ pageX }) => {
                    //     isHovered.set(1);
                    //     mouseX.set(pageX);
                    // }}
                    // onMouseLeave={() => {
                    //     isHovered.set(0);
                    //     mouseX.set(Infinity);
                    // }}
                    className={`dock-container ${className}`}
                    style={{ height: panelHeight }}
                    role="toolbar"
                    aria-label="Application dock"
                >
                    {items.map((item, index) => (
                        <DockItem
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            link={item.link}
                            mouseX={mouseX}
                            baseItemSize={baseItemSize}
                            magnification={magnification}
                            distance={distance}
                            spring={spring}
                            badgeCount={item.badgeCount}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
}