function PersonalDetails(props) {
    return (
    <section className='item item-1'>
        <h3 className='item-title'>
          PERSONAL DETAILS
          <hr></hr>
        </h3>
        <div className='item-content'>
           <ul className='item-list'>
              <li className='item-info'>
                  <p><strong>Full Name: </strong>Đào Tuấn Kiệt</p>
              </li>
              <li className='item-info'>
                  <p><strong>Date of birth: </strong>March 31, 1993</p>
              </li>
              <li className='item-info'>
                  <p><strong>Address: </strong>Phu Nhuan District, Ho Chi Minh City, Vietnam</p>
              </li>
              <li className='item-info'>
                  <p><strong>Phone: </strong>0838001118 - 0373914863</p>
              </li>
              <li className='item-info'>
                  <p><strong>Email: </strong><a href='kiet.dao3103@gmail.com'>kiet.dao3103@gmail.com</a></p>
              </li>
           </ul>
           <img src={props.avatar} alt='user img' className='item-img'/>
        </div>
     </section>
    )
}

export default PersonalDetails