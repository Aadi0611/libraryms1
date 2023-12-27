import React from 'react';

function Button({
    title,
    variant = "contained",
    color = "primary",
    type = 'button',
    onClick,
    fullwidth = false,
    disabled
}) {

    let className = fullwidth ? "w-100 rounded " : "pr-2 pl-2 rounded ";
    if (variant === 'contained' && !disabled) {
        className += "bg-" + color + " text-white";
    } else if (variant === "outlined" && !disabled) {
        className += "border-" + color + " text-" + color;
    }

    if (disabled) {
        className += "disabled-btn";
    }

    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button;