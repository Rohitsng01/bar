import React from 'react'

function about() {
  return (
    <div className='about' >
      <div className='he'>
            <div className="img">
           <div> <img width= "220" height= "200"src='assets\img\about-1.jpg'/> 
            <img width= "180" height= "170" src='assets\img\about-2.jpg'/>
             </div>
            <div>
            <img width= "180" height= "170" src='assets\img\about-3.jpg'/>
            <img width= "220" height= "200" src='assets\img\about-4.jpg'/>  
             </div>           
             </div>
             <div className='put'>
                <h3>about us &nbsp; <sub>________</sub></h3>
                <h1> <span>Welcome </span> To <img src='assets\img\bxs-wine.png'/> 30<sup>o</sup>  </h1>
                <h2> Where Every Dish is a Perfect Angle of Flavor</h2>
                <p>At 30 Degrees, we create delicious dishes that blend flavors perfectly.
             Our cozy restaurant offers a variety of carefully crafted meals, 
             each made with fresh ingredients to satisfy your taste buds.
              Whether you're looking for something savory or sweet, our diverse menu ensures there's
               something for everyone. We don't just serve food; we provide an enjoyable dining experience, 
               inviting you to join us on a flavorful journey you won't forget.</p>
               <div><button>Read More</button></div>

             </div>

        </div>

      <div>
        <div className='pm'>
          <p>
            Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where to dine,
            which means the first impression happens long before they set foot on-premises.
            It happens online. And when it does, the restaurant description plays a pivotal role.<br />
            To help overcome the writing hurdle, we've created the resource below.
            In addition to defining best practices, we have curated 20 examples of effective restaurant descriptions and analyzed why they work.
            If you don't know where to start or feel stuck,
            scroll through these examples and see if they spark new ideas.
          </p>
          <img width="350" height="250" src='assets/img/about-4.jpg' />
        </div>


      </div>
      <br />
      <div className='pm'>
        <img width="350" height="250" src='assets/img/bg1.jpg' />
        <p>
          Despite this, many restaurants struggle to write an effective description for their website.
          Doing so requires a mix of skills not every restaurant has — writing, design and a keen
          understanding of digital user behavior — but there are tools in place to make
          the job easier. For example, if you build your website with BentoBox, full-service
          designers can help create your website on a template that is proven to be user-friendly.
          That takes care of the design and user behavior hurdles.
        </p>


      </div>
      <br />
    </div>
  )
}

export default about