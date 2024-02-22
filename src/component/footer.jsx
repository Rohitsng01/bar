import {Link} from 'react-router-dom';

import React from 'react'


const footer = () => {
    return (
        <div>
             <div className='ln'></div>
        <div className='footer'>
            

            <div>
                               <h1>30<sup>o</sup> Degree</h1>
                <p>Copyright 2023.</p>
                <p>All Right Reserved.</p>
            </div>
            <div>
                <h1>Co-Founder</h1>
                <p>Rohit Singh</p>
            </div>
            <div>
                <h1>FOLLOW US </h1>
                <p className='p'><a href='https://www.facebook.com/Rohitsng47'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVNJREFUWEftmN9twjAQxr+jEklB6giwACtkgjZdgAkYgQkyAhN0AVwmYAUWaEaoRBt4yFVu/igYK04aYiLVfvFDbOen7z5f7kIY2KCB8cABmSKiVcj3t7OHlJamzR2fx8dz+KaecQU0HYtlSth0fFmj7Uz0nCQv++piHdA6Jawbndhx0YgRHc9h9D+BCIgBfCCb5ZgBmHM2/w4rCkmQlGilekMCTDyxYaC8LFaAmHiRJK+FKhcusw40Yqx0V7mgsg6kqlPkM6bSN4FVD32fwqdqjFRF1CzRq4ekmb9O4UIBOlQVcUB3V8h0q9QQTTxxEcKbe6gt0KMnPquQdwWSKYCYDoMB0pU1N1dIKRvcta8tx1xiNFWrTiGnUKHAdCz+1Ab15iHffw+IeWcKkabjbJ0YGzWKedkZ5G1LG66r1lh+LmrOadZKtyHoY637HWNSdXAK/QDyMls0pY/XWgAAAABJRU5ErkJggg=="/></a>
                    <p><a href='https://instagram.com/sng_rohit'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAt1JREFUWEftl89rE0EUx79vk16tSbwIEhUPHuxBKCZBzT9gqaC4C7H+A/0HlPoDqYi56LnnHoLatBSF+g80hSRS8CCoJ+0eRNAm1Ws382SyaVyTyc6EbKCHzjWTN5993/e+84ZwyBYdMh4cAekUMc7QSuJKmrB/GhZd1QXt/i7IBYRrN+ubpv/RApUTuTkQL5kGDNnnglCyd2vFsFgDgWRGLPKWGMhHABMM4TLHrznNLVcVdyDQajK7MQaYNgMBm7catRljoAhlGpxcpnm7WS31blBmqJzMfgSQjkQqQhGCKyCSdRiM6dqN2pQp0J9oYKhk71bnZaxyIpMH0UYwrt2oHdMCDSVX++vJlan3baGVh8VpMBY6B3WzoIzLPNNrCX2SGQKFdkpPh7oE7CgbRFFH/UCp7ELgC/uUC3bIymTmLGI0DeLzciMzfRaCtgt71W9GtkEo9vrS0EDopHk1eemCILpPTLP/UTPexCx6dnO3+qktI3myQdRrZCDyi/Tl8dyZOImnILquPImxzvAeOc1tt5zKLYF5TrlvZKCO5iupzA1iWg7rRBZ0x9mrvlV1V/d/owIxx6ek5ZcTuXsgfqCxhid2o/Y8VLZRgQ7qp5zI3AXRQw3Qot2ovRhrhroFncjNMnGf7QcBmbngNOsboTYycoY6Rb2WzJ4SwCIAW50lfu1ZE48Lv7a+j7eoARfM89Jd1ycvn9uPeQsEcnqgXnGLi87v+tdQufxrPwIfArrXwdqJ6ZOiNXFRGiMBLCC+IIYPzs/3P+R52hHGCMhsQtReHUTeO+3EYHR1KG7lAd3kgmgTAhU5NzMmdsjyfAP8d7mGN6LJ5aq1+0jmEj/Iga8FQyoHNK32EUEZzUP+MBXZS2MwukIuv/EGrHFmaeghXzK2a0kWqWmBGsoYBhOaoYP4Uj4ivh3Bk2i0h2LvB3ef0rDS7bnZdAmuRPqUNj03qn3at31UB5nGOQLSZeovtmOYNBCurNQAAAAASUVORK5CYII="/></a></p>
                    <p> <a href='https://twitter.com'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgpJREFUWEftl+FtwjAQhd8FCRBIHSFdgBFgApoOUCZgBCagGzABHaC0E9ARWAB2gAISuepEXKWJE58DragUfpKz/fn5+dkm3NiPbowHNZBrRWqF/lyhdvs1DJgmAAYMhAQsifFxCni+3z9u0kBSm/0vt2RS1IhptD1GU9dsst+7zcUkJghM7kfAJiYaN2IOmfDEAkzcUwC9DYj5PWBMfaDa7XM77SQCxnh7jObZ+pxC6VlqoURVYlppYQgwIOHuEA3T7XJAndZixsDIFIkHYuJxVtp0J93mYhQTZlogqZMl3B2inkYha+ci8SngpQ2szDtFfrLBJKA/m7i8cFaMnoF4beCyqrqUKrOCNRi1MxY4M7jsGheI+e4FJH6QpZEsSXtJO5imjomG+/3D92RUphbTSbBpBvCt8QKqsmN8gT4P0V1RG6uHOq3F6rfUEd9ls6d0yeSjqMQE8dDVl8wVtoXXD9n+AbOE5NWgisLQqZAUCFD6IPT1ia3epY41GE1HroCsAlhm5tRRVdy1NiA1cBp1ShUygwgUE0aXeMm1s1QeShclfuozoe9zRJSd6l45ZCuuEpg+yqg8lFxnB1UyqQpMzkOiAgC581b2jLk7Fx2erg1QdP3wTurkdfFiuye7INSmNmaWBmJoAPfJ00aeM2sAm+SJY71J+oCoPFSlw0vb1E9pl4K1Qv9OoS+VwgE0MrbUIAAAAABJRU5ErkJggg=="/></a>
                    </p>
                    <p> <a href = 'https://www.linkedin.com/in/rohit-kumar-07412a246/'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAZNJREFUWEftmE1ugzAQhd9whVCpS3qSkEVojsFNWk5Ce4uILKAnSZaVSk/QwhRX1DKOCQRwRCXYgT3jT29+bEOY2UMz48EC1BURo0L3O/a+S4RdxmPGiXH6ONCL7uMM6G7LIRPiMYv1tnWwyfeUqfPPgNyAnwE89XY6bmKUJyTWk8+/BYrgIEMJf2L1BinUMJo4xwYAaYlXV+BxXOpI6wFAwLwUYuBEwOuccmii6BjdXB8yoRAIsnlRCa96F9UGJjQ6bdV9Q6koANGNSwdrMHwCPAPS9UCV34aR2jjzhGQf+032AnF+oI2+sBj7KpEaoOwCve/p1BZfd8c+SqTauD0gdSGhiAnO3XL6F+56vl0gVQWRS58JPaigq0eORZ4p3ywD6QpoTdWwcdsFWgV81BK3tSBuE7KA+VLS3lwhdwEC0NYYRagWhWoV5Jlb3TpupxAjA+FNVg9jrXTbSKuq5uXgsq0wHdSH5nX8sEnTTyHzrmyHq89FUezURQG/OnyZDlSTgfW+Sk+24kBHy++YLuFmp9APPOZ0NAUGF/IAAAAASUVORK5CYII="/></a>
                    </p>
                    <p><a href='https://www.youtube.com'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAZpJREFUWEftV8FxgzAQvJP8TgnOH9OCK0gJnkn4poNQgUvgGZKZpANX4BZs/qGEvAOXORIRJBOEUGCYDLxsJJ32VnerBWFmD84MDyyAbCeyMPT/GHpcBVvOCgnWWnbmfzN1hFy9ou/f8gPe+N0tZPXY5bIWDlMZ7IAwBjRA2PjuOY6AR4LyVRRwNMFdFHUqgwQAdz1j+00j2kdltm8G0QA9Q7AuJZ78dnFbLQoKmyxpgFIRxIAYu4X0nG2wpAF6kuGBgKoinu6hl6jI7tV+foAIct/C5wK/K043rYBSsTm5bBAV5yvvjiTIo/IctgOSm3eXo2JAan7VnYRbl4TU2mYcvag9AHFwFlFB4sG1DkcDpDJmYFhi0petSQC5MDUaIBZWkiL5uyMb0GV1UQ8V1c4uGwBo3LZ3BPR1a/spe6cwzu7qmNR61O5NtyCaMFb6QXhwUWvfuZ32g4NPyZJZP7x/62dQ5YvYNY5kYStWW9zir4DUMbDQFSu4rm9iZextBv/n6taM/mCT71sXPuuXL1cbewtDC0M2Bmzjn3cQwiV8cS1CAAAAAElFTkSuQmCC"/></a></p>
                    </p>

                <div>
                    <main>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/services"}>Services</Link>
                        <Link to={"/book"}>Book Table</Link>
                        <Link to={"/menu"}>Menu Card</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/Help"}>Help</Link>
                    </main>
                </div>
            </div>

        </div>
        </div>
    )
}

export default footer