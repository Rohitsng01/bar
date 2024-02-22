import { Link } from 'react-router-dom'


import React from 'react'


const header = () => {
  return (
    <div>

                <nav className="h1">
                    <h1>30<sup>o</sup> DEGREE</h1>
                    <main>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/services"}>Services</Link>
                        <Link to={"/book"}>Book Table</Link>
                        <Link to={"/menu"}>Menu Card</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/Help"}>Help</Link> 
                        <Link to={"/login"}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAArRJREFUWEftV+1RwzAMlfMr6RQwCWWETECZBJiEdoKMQJmETtH0Vwyy7MYfsmz3F8fhu16PkNpPT0/Ss4JfttQvwwN/A9DU91sAuAOlnsw3fXCdzEepT1iW/Xi54N9Nq4mhqe93oNSLB6B02BG0PgDAsRZcFSDDCAFBZm5ZCOy5BlQRkAXzkaBQag/L8ulHP/U9pa/rnkBrSqu/CNReikgENG0276D1rnVT9/602byC1k5n9Fipt/F8fs2BygKyenn3fngc5/mxNV+GNaWQ4ZUtARQLiEkTC8Yy8GC1da0wjoGEba3vOU3xgIbhy4soAWOjRvZyIj+B1o/xgVO4L/tOAshGjRVl+so4z/dxmqZhwBSUKi75bZI+RuQpID8KJteJtuw75rCu24HWLhiwpR5UVSngAJCNANNVxw4TYQSY154fdKSlEBCVKUWYqYRAB4wwq4Ly20l0TgjI10amiZUAYSzTMGinu3GeU1nQCHItJWAxBrRWV6YsA0GXNKbUfjyfn5OioN7ESiMGJEZmog+jw8l+wL5TK+prF8+w2M4QRSf1IHdmtrNLOmsGZFkqgWKb3pWdhpStDa8wmb0UVY0OX0fRaBJEHZY9K0hWoNHDku8JmqNY9mTEVu+Tq7SycxSdot8WfhxlMGSbRgdrJWQ/kmipaXQYwfppwwc2gqgyfBixkQ9dorQH08eq7AcOycRkCaJnLgOGqahdsE4iZ9Bil4csrJGT1zlK2WLSW7VH3sLGqXOnFzxxUN65PQR2SyZ/nf7uJExf5T0r0SPpSbx5lK9BeabwGoSXQPJOl8vpeqPtuofktlIBxrgeuWrpv7az4vxKK6hmA7xeEzOi7qoBeTOo9SqNQN5Kl0M/piqGmHGxha7bgtY4xxxr+I12hFhYlkMNI/HeNwGqy9Jtb/0DKvH2DdIQGUMuUJwFAAAAAElFTkSuQmCC"/></Link>
                        <Link to={"/Cart"}><img  src='./assets/img/cart.svg'/></Link> 
                    </main>
                </nav>
                <div className='ln'></div>
    
    </div>
  )
}

export default header
