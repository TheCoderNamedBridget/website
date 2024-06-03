import {ReactNode} from 'react';

type BlogPageProps = {
    title?: string,
    children?: ReactNode,
    footer?: string,
}

function BlogPage(props: BlogPageProps) {
    return (
        <div className='section'>
            <br/>
            <h1>{props.title}</h1>
            {props.children}
            <p>{props.footer}</p>
        </div>
    )
}

export default BlogPage;