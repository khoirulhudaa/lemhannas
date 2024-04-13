import LinesHero from "../Components/LineHero";
import Footer from "../Components/Footer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import Navbar from "../Components/Navbar";
import { NewsLetterEdisi175Februari2024 } from "../Assets/Index";
import { FaChevronDown } from "react-icons/fa";

const MajalahSwantara: React.FC = () => {
  const [open, setOpen] = React.useState(1);
  const [open2, setOpen2] = React.useState(3);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value: number) => setOpen2(open2 === value ? 0 : value);
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="relative w-screen bg-[#913d88] -z-10 h-[60vh] flex items-center justify-center mb-8">
        <LinesHero />
        <h2 className="text-white mt-8 text-[60px]">Majalah Swantara</h2>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[36px] mb-4">2024</h2>
          <Accordion open={open === 1} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className=" w-[99%]">Edisi 175, Februari 2024</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open === 2} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen(2)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 175, Januari 2024</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[36px] mb-4">2023</h2>
          <Accordion open={open2 === 3} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(3)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className=" w-[99%]">Edisi 173, Desember 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 4} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(4)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, November 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 5} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(5)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Oktober 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 6} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(6)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, September 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 7} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(7)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Agustus 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 8} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(8)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Juli 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 9} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(9)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Juni 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 9} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(9)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Mei 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 10} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(10)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, April 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 11} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(11)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Maret 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 12} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(12)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Februari 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
            <hr className=" w-full h-1 bg-purple-700 opacity-20" />
          </Accordion>
          <Accordion open={open2 === 13} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader className=" flex" onClick={() => handleOpen2(13)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className=" w-[99%]">Edisi 173, Januari 2023</div>
              <FaChevronDown/>
            </AccordionHeader>
            <AccordionBody>
              <div className=" flex flex-col items-center">
                <img
                  className=" w-[150px]"
                  src={NewsLetterEdisi175Februari2024}
                  alt="NewsLetterEdisi175Februari2024"
                />
                <p>
                  <span className=" cursor-pointer">Indonesia</span> |{" "}
                  <span className=" cursor-pointer">English</span>
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MajalahSwantara;
