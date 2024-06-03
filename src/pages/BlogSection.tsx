
import BlogPreview from '../components/blog/BlogPreview';
import { useNavigate } from 'react-router-dom';
import './BlogSection.css';

function BlogSection() {
    const navigate = useNavigate();

    return (
        <div className="section blog">
            <button className="back_button" onClick={() => navigate("..")}>Go Back</button>
            <div className="text_banner blog_heading_blurb">
                <h1>Hot takes</h1>
                <p>tech, fertility crisis, and other random stuff</p>
            </div>
            <br />
            <br />
            <br />
            <div className="grid_view">
                <BlogPreview title="A Blog" footer="a footer">
                    <p>a super cool article</p>
                </BlogPreview>
                <BlogPreview title="A Blog" footer="a footer">
                    <p>a super cool article</p>
                </BlogPreview>
                <BlogPreview title="A Blog" footer="a footer">
                    <p>a super cool article</p>
                </BlogPreview>
                <BlogPreview title="A Blog" footer="a footer">
                    <p>a super cool article</p>
                </BlogPreview>
            </div>
        </div>
    )
}

export default BlogSection;