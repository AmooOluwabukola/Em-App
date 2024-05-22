import { useEffect } from 'react';
import homeImg from '../assets/home.png';
import communityImg from '../assets/communitylogo.png'
import profileImg from '../assets/JoePic.png';
import searchImg from '../assets/search-normal.svg'
import logoImg from '../assets/Em-Logo.png';
import NavBag from '../components/NavBag';
import '../styles/NavBar.css';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';
import { useCallback } from 'react';
import { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';

import debounce from "lodash.debounce";



const Navbar = () => {
  const [bagShow, SetBagShow] = useState(false);
  const [searchTerm, setSearchTerm]=useState('')
  const [searchResults, setSearchResults]= useState([''])


  const [bioProfile, setBioProfile]=useState([])
  const token = localStorage.getItem("clientToken")
  function handleDrop() {
    !bagShow ? SetBagShow(true) : SetBagShow(false);
  }

  const getBioProfile = async ()=>{
    try {
      const request = await fetch("http://localhost:5780/api/v1/users",{
        headers:{
          "Content-type":"application/json",
          Authorization:`Bearer ${token}`
        }
      })
      const response = await request.json();
      console.log(response.user);
      setBioProfile(response.user)
      
    } catch (error) {
      console.log(error.message);
    }
  }

  const performSearch = useCallback(
    async (term) => {
      if (term) {
        try {
          const request = await fetch(
           ` http://localhost:5780/api/v1/users/search?searchTerm=${term}`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const response = await request.json();
          if (response.success) {
            setSearchResults(response.users);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.log(error.message);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    },
    [token]
  );
  const debouncedSearch = useCallback(
    debounce((term) => {
      performSearch(term);
    }, 300),
    [performSearch]
  );
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  useEffect(() => {
    getBioProfile()
  },[]);
  return (
    <>
      <main className='d-flex justify-content-between align-items-center container nav-container '>
        {/* search section */}
        <section className='d-flex gap-3 align-items-center search-div'>
          <div className='logo-div d-none d-lg-block'>
            <img src={logoImg} alt='' className='logo-img ' />
          </div>
          <div className='position-relative'>
            <input
              type='text'
              className='rounded-pill ps-5 search-input search-box'
              placeholder='search'
              value={searchTerm}
              onChange={handleSearch}
            />
            <img
              src={searchImg}
              alt=''
              className='position-absolute img-fluid search-img'
            />
           <div>
             {searchTerm && (
              <div className="search-results position-absolute z-1 bg-secondary text-white border rounded w-100">
                {searchResults.length ? (
                  searchResults.map(user => (
                    <div key={user._id} className="search-result-item">
                      <Link className="text-decoration-none text-white" to={`/singleuserprofile/${user._id}`}>
                            
                      {user.userName}
                            </Link>
                    </div>
                  ))
                ) : (
                  <div className="search-no-results">No results found</div>
                )}
              </div>
            )}
             </div>
          </div>
        </section>

        {/* profile section */}
        <div className='d-none  d-md-block'>
          <section className='d-flex gap-3 align-items-center position-relative'>
            <Link to="/" className='text-decoration-none text-black'>
            
            <div className='d-flex flex-column align-items-center'>
              <img src={homeImg} alt='' />
              <span>Home</span>
            </div>
            </Link>
            <Link  to="/community" className='text-decoration-none text-black'>
            <div className='d-flex flex-column align-items-center' role='button'>
              <img src={communityImg} alt='' />
              <span>Community</span>
            </div>
            </Link>
            
            <div className='d-flex flex-column align-items-center  '>
              <img src={bioProfile?.profilePhoto} alt='' className=' border rounded-pill' style={{width:"50px"}} />
              <span className='d-flex'>
                Me
                <span
                  className='d-none   d-lg-block '
                  role='button'
                  onClick={handleDrop}
                >
                  {' '}
                  {bagShow ? <GoChevronUp /> : <GoChevronDown />}
                </span>
              </span>
            </div>
            <div className='position-absolute nav-bag'>
              {bagShow && <NavBag />}
            </div>
          </section>
        </div>
      </main>
      <Outlet/>
    </>
  );
;
}
export default Navbar;