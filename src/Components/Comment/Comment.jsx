import "./Comment.scss";

import FoodDrink from "../../Assets/Images/FoodDrink.png";

function Comment() {
    return (
        <div className="comment">
            <div className="comment-header">
                 <div className="comment-header-main">
                 <img src={FoodDrink} alt="food drink" className="comment-logo" />
                <div className="comment-main">
                    <h1 className="comment-main__title">Food & Drink</h1>
                    <p className="comment-main__date">Published on 14 Jun 2019</p>
                    <p className="comment-main__content">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. 
                    
                    </p>
                    <a href="#link" className="comment-main__showmore-btn">Show more</a>
                </div>
                 </div>
                <button className="comment-subscribe-btn">Subscribe 2.3m</button>
            </div>
        </div>
    )
}

export default Comment;