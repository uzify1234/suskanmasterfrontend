import React,{useEffect} from 'react'
import { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header';
import './FFFConference.css';
import { useNavigate, useParams } from "react-router-dom";

function FFFConference() {

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
            } else {
                navigate('/');
            }
          });
    }, [])
    return (
        <div className='fffconference'>
             <Header />
             <div className='fffconferences'>
             <h4> FFF Conference 1</h4>
            <div className="allvideos">
                
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/fNcd8Ic2E1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/FsRykwLFEiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/DwznF5_Ubmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/z1lbV6hCma4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/6XCr-OipAXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/BSaLDaOkr3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/pZfN6Hr9VYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/EyKFZObrYek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/nknb6N5mte0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/qu22YTe8ABo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/p1JKb7uTaps" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/MRxGZmHHCN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/lEBgm0bEVwk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/rxSyiZp9Gr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <h4> FFF Conference 2</h4>
            <div className="allvideos">

                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/kfdOEHf3AGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/ucS2dEGmPDc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/BWJvO5C5xK8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/AJMCkApQfQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/AQtZdWtLviA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/P0AQTbNJ9Hw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/TgLCbozfoAU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/Cj4SQwBa264" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/V04sc2YJSgk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/okb6lW_GZw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/TtMPL_NPgng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/dkJtquag7Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/3gbg-ZA4GRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/p6lpFvVpy0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/1a5kQz_leM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/jvNCXzLEAmo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/VBivvvhi-DY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/UwHYpEE8D1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/SGNZW9HQONQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/WG6lVTbSBEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/HwpHg7svE-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/yuMzxDfyI8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/bjwBowLK120" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/awSxczqGjjw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/j93he0Zr-eE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/Y1UVq3mEGwA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/tba4prdrQjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/68UKBUOjA80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FFFConference
