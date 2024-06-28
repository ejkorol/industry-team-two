import Button from "@/components/Button/Button";
import { useNavigate } from 'react-router-dom'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import youtube from '@/assets/youtube.svg'
import twitter from '@/assets/twitter.svg'
import kijijiLogo from '@/assets/kijijilogo.svg'
import appleTemu from '@/assets/apple-from-temu.svg'
import appleEnglish from '@/assets/apple.svg'
import googleEnglish from '@/assets/google.png'
import googleAlbania from '@/assets/albanianGoogle.png'
import '../Home/Home.scss'

export default function Home() {

  const navigate = useNavigate()

  function SearchClick() {
      navigate('/search');
  };
  
  function postClick() {
      navigate('/post'); 
  };


  return (
    <>
    <h1>Home</h1>
    <Button onClick={SearchClick} >Search</Button>
    <Button onClick={postClick} >Post Ad</Button>
    <Button icon={facebook} link='http://www.facebook.com' ></Button>
    <Button icon={instagram} link='http://www.instagram.com' ></Button>
    <Button icon={twitter} link='http://www.twitter.com' ></Button>
    <Button icon={youtube} link='http://www.youtube.com' ></Button>
    <Button icon={kijijiLogo} link='https://www.kijiji.ca/kijijicentral/' ></Button>
    <a href="http://www.temu.com" ><img src={appleTemu} alt="apple" /></a>
    <a href="https://www.alibaba.com" ><img className="google" src={googleAlbania} alt="google" /></a>
    </>
  );
}
