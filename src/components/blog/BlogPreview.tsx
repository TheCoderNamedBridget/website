import { ReactNode } from 'react';

import './BlogPreview.css'

type BlogPreviewProps = {
    title?: string,
    children?: ReactNode,
    footer?: string,
}

function BlogPreview(props: BlogPreviewProps) {

    return (
        <div className="blog_preview">
            <br />
            <h1>{props.title}</h1>
            {props.children}
            <p>{props.footer}</p>
        </div>
    )
}

export default BlogPreview;