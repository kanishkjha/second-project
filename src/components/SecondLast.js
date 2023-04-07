import React from "react";
import { useState } from "react";
import "../styles/SecondLast.css";

export default function SecondLast() {
  const [list, setList] = useState([
    {
      h4: "Lorem ipsum dolor sit amet consectetur?",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos velit quibusdam sint exercitationem repellat ducimus quidem similique odit magnam!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis accusantium natus molestiae ut iure iste reiciendis, dolores nulla, porro dolorem quo delectus saepe sint dignissimos labore officiis fugiat blanditiis!",
      content: false,
      id: 1,
    },
    {
      h4: "Lorem ipsum dolor sit amet consectetur?",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos velit quibusdam sint exercitationem repellat ducimus quidem similique odit magnam!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis accusantium natus molestiae ut iure iste reiciendis, dolores nulla, porro dolorem quo delectus saepe sint dignissimos labore officiis fugiat blanditiis!",
      content: false,
      id: 2,
    },
    {
      h4: "Lorem ipsum dolor sit amet consectetur?",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos velit quibusdam sint exercitationem repellat ducimus quidem similique odit magnam!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis accusantium natus molestiae ut iure iste reiciendis, dolores nulla, porro dolorem quo delectus saepe sint dignissimos labore officiis fugiat blanditiis!",
      content: false,
      id: 3,
    },
    {
      h4: "Lorem ipsum dolor sit amet consectetur?",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos velit quibusdam sint exercitationem repellat ducimus quidem similique odit magnam!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis accusantium natus molestiae ut iure iste reiciendis, dolores nulla, porro dolorem quo delectus saepe sint dignissimos labore officiis fugiat blanditiis!",
      content: false,
      id: 4,
    },
  ]);

  const handleClick1 = (id) => {
    setList(
      list.map((listItem) => {
        if (id === listItem.id) {
          return { ...listItem, content: true };
        } else {
          return listItem;
        }
      })
    );
  };

  const handleClick2 = (id) => {
    setList(
      list.map((listItem) => {
        if (id === listItem.id) {
          return { ...listItem, content: false };
        } else {
          return listItem;
        }
      })
    );
  };

  return (
    <div className="list-item">
      <h3>Frequently Asked Questions</h3>
      {list.map((listItem) => (
        <div key={listItem.id}>
          <h4>
            {!listItem.content && (
              <button
                onClick={() => {
                  handleClick1(listItem.id);
                }}
              >
                +
              </button>
            )}
            {listItem.content && (
              <button
                onClick={() => {
                  handleClick2(listItem.id);
                }}
              >
                -
              </button>
            )}
            {listItem.h4}
          </h4>
          <p>{listItem.content && listItem.p}</p>
        </div>
      ))}
    </div>
  );
}
