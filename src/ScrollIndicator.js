import React, {useState,useEffect} from 'react'
import './App.css'

const scrollIndicator = () => {
    const [scrollTop,setScrollTop]=useState(0);
    const onScroll=()=>{
      const winScroll=document.documentElement.scrollTop;
      const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    
      const scrolled=(winScroll/height)*100;
      setScrollTop(scrolled);
    }
  useEffect(()=>{
    window.addEventListener("scroll",onScroll)

    return ()=> removeEventListener("scroll",onScroll)
  })
  return (
    <div>
        <div className="slider-section">
        <div className='vertical-line' >
          <div className='vertical-line-colored'style={{height:`${scrollTop}%`}}></div>
        </div>
        <div className='some-content'>
            <div>
                <div className='circle'>
                  <div className='circle-colored' style={scrollTop<=2?{display:'none'}:{display:'block'}}></div>
                </div>
                <h2>Basic</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div className='circle'>
                  <div className='circle-colored' style={scrollTop<=32?{display:'none'}:{display:'block'}}></div>
                </div>
                <h2>Basic</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div className='circle'>
                  <div className='circle-colored' style={scrollTop<=66?{display:'none'}:{display:'block'}}></div>
                </div>
                <h2>Basic</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className='div-image'>
            <img src='image.jpg'></img>
        </div>
      </div>
        <div className='loremI'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed augue lectus. Morbi vel ipsum bibendum, fringilla massa a, lobortis mauris. Praesent quis neque lacinia, consectetur sem nec, placerat ipsum. Maecenas finibus faucibus varius. Nunc eu dui quis turpis ultrices placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae venenatis arcu, faucibus eleifend nisi.

Fusce eget felis nisi. In mattis, neque sit amet aliquet tempus, velit eros molestie elit, varius hendrerit arcu risus sit amet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget malesuada metus. Duis dictum velit at feugiat finibus. Nam condimentum ante eget commodo vestibulum. Maecenas cursus venenatis dapibus.

Nam erat mauris, tristique mattis interdum quis, mattis vitae nibh. Suspendisse dignissim nec purus eu sodales. Nam eleifend tortor velit, nec mattis leo facilisis nec. Donec euismod orci ac turpis auctor lobortis. In lacus quam, dictum sit amet efficitur nec, sagittis quis diam. Nam urna orci, cursus porta placerat in, facilisis ut tortor. Suspendisse vel facilisis mi, gravida laoreet sapien. Mauris lorem diam, finibus sed orci non, ornare bibendum ligula.

Maecenas tristique ultricies ante non fringilla. Proin rutrum euismod urna vel fringilla. Aliquam ac laoreet nisi. Vestibulum laoreet nisl ligula. Etiam id cursus nisi. Phasellus congue elementum iaculis. Proin elementum bibendum lectus id tincidunt. Morbi et purus venenatis, pulvinar lectus nec, fermentum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada malesuada neque at tincidunt. Nunc ligula nisi, varius sit amet mauris a, auctor vestibulum nisi. Nulla pulvinar tellus finibus quam iaculis, quis hendrerit neque iaculis.

Pellentesque eleifend, tortor sed bibendum rhoncus, neque lacus vehicula massa, eget egestas nisl enim rhoncus sem. Mauris est purus, tristique at sem tristique, sodales semper urna. Nam sit amet velit at eros cursus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam magna, sodales vel efficitur vitae, commodo in mauris. Integer placerat nunc sed sodales mollis. Suspendisse lorem turpis, condimentum quis porttitor nec, porttitor ut dolor. Nulla eu sollicitudin metus, eget rhoncus turpis. Phasellus ut felis nunc. Aenean massa mauris, dignissim eget laoreet a, venenatis vitae neque.
        </div>
    </div>
  )
}

export default scrollIndicator