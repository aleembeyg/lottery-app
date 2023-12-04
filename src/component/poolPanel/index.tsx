"use client";

import { useEffect, useState } from "react";
import PlayButton from "../playButton";
import moment from "moment";
import { FaRegClock } from "react-icons/fa6";
import { MdZoomIn } from "react-icons/md";
import { MdZoomOut } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";

interface poolpanel {
  backgroundClass: string;
  title: string;
  data: any[];
  itemsList: any[];
  count: string;
  winingPool: string;
  setShowZoomOF: any;
}

const PoolPanel = (props: poolpanel) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      var newDate = date;
      newDate.setSeconds(date.getSeconds() + 2);
      setDate(newDate);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={"boxpanel " + props.backgroundClass}>
        <div className={"infoPanel"}>
          <h3>
            <p>
              {props.title}{" "}
              <span>
                {props.itemsList.length == 0
                  ? `No. ${props.count}`
                  : "Last 5 Results"}
              </span>
            </p>
            {props.title != "Classic" && (
              <MdZoomIn
                style={{ cursor: "pointer" }}
                onClick={() =>
                  props.setShowZoomOF(
                    props.title == "Classic" ? "" : props.title
                  )
                }
              />
            )}
            {props.title == "Classic" && (
              <MdZoomOut
                style={{ cursor: "pointer" }}
                onClick={() => props.setShowZoomOF("")}
              />
            )}
          </h3>
          {props.data.length > 0 && (
            <div className="draws">
              {props.data.map((item: any, index: number) => (
                <div key={index} className={item.state}>
                  {item.value}
                </div>
              ))}
            </div>
          )}
          {props.itemsList.length > 0 && (
            <div className="list">
              {props.itemsList.map((item: any, index: number) => (
                <div key={index} className="items">
                  <div>{item.name}</div>
                  <div className="blue">{item.number}</div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          )}
          {props.itemsList.length == 0 && (
            <div className="winPanel">
              <span>Winning Pot</span>{" "}
              <span>
                <strong>{props.winingPool}</strong>LUCK!
              </span>
            </div>
          )}
        </div>
        <div className="actionalPanel">
          <div className="timer">
            <span>Next Draw</span>
            <FaRegClock /> {moment(date).format("HH:mm:ss")}
          </div>
          <PlayButton />
        </div>
        <div className="expandBtn">
          <BiSolidDownArrow />
          Current Pool Status
        </div>
      </div>
    </>
  );
};

export default PoolPanel;
