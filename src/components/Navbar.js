import React,{useState,useEffect,useRef,createRef} from "react"
import gsap from "gsap";
import './Navbar.css';

const Navbar = ({items}) => {
    const $root = useRef()
    const $indicator1 = useRef()
    const $indicator2 = useRef()
    const $items = useRef(items.map(createRef))
    const [ active, setActive ] = useState(0)
    const [display, setDisplay] = useState(false)
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
             setnavbarblur(true);
        } 
        else {
             setnavbarblur(false);
        }
    }
    
    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect()
      const activeItem = $items.current[active].current
      const { width, height, top, left } = activeItem.getBoundingClientRect()
      
      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: .8
      }
      
      gsap.to($indicator1.current, {
        ...settings,
      })
      
      gsap.to($indicator2.current, {
        ...settings,
        duration: 1
      })
    }
    
    useEffect(() => {
      animate()
      window.addEventListener('resize', animate)
      
      return (() => {
        window.removeEventListener('resize', animate)
      })    
    }, [active])
    const isDisplay=()=>{
        setDisplay(!display)
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <>
        <div className={navbarblur?"navbar-blur z-10 flex justify-between sticky top-0":"nav z-10 flex justify-between sticky top-0"}>
            <div className=" my-10 mx-10 font-bold">logo</div>
            <div ref={$root} className={display?"menu":"menu-hidden"}>
                {items.map((item, index) => (
                    <a
                    key={item.name}
                    ref={$items.current[index]}
                    className={`item ${active === index ? 'active' : ''}`}
                    onMouseEnter={() => {setActive(index)}}
                    href={item.href}
                    onClick={()=>isDisplay()}
                    >
                    {item.name}
                    </a>
                ))}
                <div ref={$indicator1} className="indicator"/>
                <div ref={$indicator2} className="indicator"/>
                <div className={display?"btn-group ":"btn-group-hidden"}>
                <button className="signup-btn  my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                
                    <span class="span-mother">
                      <span>S</span>
                      <span>i</span>
                      <span>g</span>
                      <span>n</span>
                      <span>U</span>
                      <span>p</span>
                    </span>
                    <span class="span-mother2">
                      <span>S</span>
                      <span>i</span>
                      <span>g</span>
                      <span>n</span>
                      <span>U</span>
                      <span>p</span>
                    </span>


                </button>
                
            </div>

                
            </div>
            
            
            <div className="hamburger hidden">
                <input onClick={()=>isDisplay()} type="checkbox" id="checkbox" className=""/>
                <label for="checkbox" class="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                </label>
            </div>
        
        </div>
        
        
        
        </>
    )
  }
  
export default Navbar