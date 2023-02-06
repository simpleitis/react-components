import React from 'react';
import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
    const finalClassNames = classNames(
        'bg-white border p-3 shadow w-full',
        className
    );

    return (
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
}

export default Panel;
