import './PostFooter.scss'

export default function PostFooter(){
    return (
        <footer className="post-footer">
            <div className="post-footer__buttons">
                <button className="post-footer__button">Save draft</button>
                <button className="post-footer__button button__publish">Publish</button>
            </div>
            <p className="post-footer__terms">By posting your listing, you aree to our <span className="post-footer__underline">Terms of Use</span> and <span className="post-footer__underline">Privacy Policy</span></p>
        </footer>
    )
}