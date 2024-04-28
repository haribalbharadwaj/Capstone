import React from 'react'

function Contact() {
    const styles ={
        container:{
            margin:'10 auto',
            padding:'10px',
            backgroundColor:'#eee'
        },
        heading: {
            fontSize: '8em',
            textAlign: 'center',
            margin: '1rem'
        }
    }
  return (
    <div style={styles.container}>
        <p style={styles.heading}>Contact</p>
        <hr/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores repellendus accusantium labore fugit maiores error possimus, eum amet ipsa sunt aliquid adipisci sequi magnam et! Iusto, ullam sint consequuntur asperiores ipsum ea tempore consectetur! Maiores nam nulla molestiae tempore dolores. Velit ad vero quia itaque sequi corporis, fuga deleniti?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nesciunt, voluptates quos odio quia dolor consectetur modi eius, iste voluptate pariatur! Totam sed facere ipsam ullam blanditiis magni consequuntur, distinctio non voluptatibus perspiciatis soluta omnis corrupti qui officiis modi vitae incidunt maiores fugiat porro voluptate sequi quaerat. Aut quidem praesentium reiciendis ut itaque cumque maxime ex, officia deserunt laudantium. Eos.</p>
    </div>
  )
}

export default Contact;