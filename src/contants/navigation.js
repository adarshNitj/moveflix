import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <PiTelevisionFill/>
    },
    {
        label : "Movies",
        href : "movie",
        icon : <BiSolidMoviePlay/>
    },
    {
        label : "Favorite",
        href : "favorite",
        icon : <FaHeart />
    }

]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon : <MdHomeFilled/>
    },
    ...navigation,
    {
        label : "search",
        href : "/search",
        icon : <IoSearchOutline/>
    }
]