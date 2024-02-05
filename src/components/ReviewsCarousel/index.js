import {Component} from 'react'
import './index.css'

const ReviewItem = props => {
  const {reviewObject} = props
  const {imgUrl, username, companyName, description} = reviewObject

  return (
    <li className="review-container">
      <h1 className="heading">Reviews</h1>
      <img src={imgUrl} className="image" alt={username} />
      <p className="username">{username}</p>
      <p className="companyName">{companyName}</p>
      <p className="desc">{description}</p>
    </li>
  )
}

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    const {reviewsList} = props
    this.state = {
      count: 0,
      maxLength: reviewsList.length - 1,
    }
  }

  decrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prev => ({count: prev.count - 1}))
    }
  }

  increment = () => {
    const {count, maxLength} = this.state
    if (count < maxLength) {
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <button type="button" data-testid="leftArrow">
            <img
              onClick={this.decrement}
              className="icon"
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <ul>
            <ReviewItem reviewObject={reviewsList[count]} />
          </ul>
          <button type="button" data-testid="rightArrow">
            <img
              onClick={this.increment}
              className="icon"
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
