let threeC = document.createElement("div");
const date_i = new Date();
let currentDay = String(date_i.getDate()).padStart(2, "0");
let currentMonth = String(date_i.getMonth() + 1).padStart(2, "0");
let currentYear = date_i.getFullYear();
let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
let tower = document.createElement("div");
tower.classList.add("tower");
let text_tower = document.createElement("h3");
text_tower.classList.add("text_tower");
text_tower.innerText = "Tower";
tower.appendChild(text_tower);
let floor = document.createElement("div");
floor.classList.add("floor");
let floor_text = document.createElement("h3");
floor_text.innerText = "Floor";
floor_text.classList.add("floor_text");
floor.appendChild(floor_text);
let meeting = document.createElement("div");
meeting.classList.add("meeting");
let meeting_text = document.createElement("h3");
meeting_text.classList.add("meeting_text");
meeting_text.innerText = "Room";
meeting.appendChild(meeting_text);
threeC.appendChild(tower);
threeC.appendChild(floor);
threeC.appendChild(meeting);
threeC.classList.add("threeC");
let container = document.getElementById("container");
let drop_down_list1 = document.createElement("select");
drop_down_list1.classList.add("select");
let drop_down_list2 = document.createElement("select");
drop_down_list2.classList.add("select");
let drop_down_list3 = document.createElement("select");
drop_down_list3.classList.add("select");
let option_A = document.createElement("option");
let option_B = document.createElement("option");
option_A.text = "A";
option_B.text = "B";
drop_down_list1.add(option_A);
drop_down_list1.add(option_B);
tower.appendChild(drop_down_list1);
for (let i = 0; i < 25; i++) {
  let option_floor = document.createElement("option");
  option_floor.text = i + 3;
  drop_down_list2.add(option_floor);
}
floor.appendChild(drop_down_list2);
for (let i = 0; i < 10; i++) {
  let meeting_room = document.createElement("option");
  meeting_room.text = i + 1;
  drop_down_list3.add(meeting_room);
}
meeting.appendChild(drop_down_list3);
container.appendChild(threeC);
$(function () {
  $('input[name="date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minDate: moment().startOf("day"),
    opens: "center", 
  });
});
let comment = document.createElement("input");
comment.classList.add("input2");
comment.placeholder = "Comment section"
container.appendChild(comment);
let submit = document.createElement("button");
submit.innerText = "Submit";
container.appendChild(submit);
let clear = document.createElement("button");
clear.innerText = "Clear";
container.appendChild(clear);
let date = document.getElementById("date");
const initial_value = date.value;

submit.addEventListener("click", function () {
  var form = {
    tower: drop_down_list1.value,
    floor: drop_down_list2.value,
    "meeting room": drop_down_list3.value,
    comment: comment.value,
    date: date.value,
  };
  console.log(form);
});
clear.addEventListener("click", function () {
  drop_down_list1.value = drop_down_list1[0];
  drop_down_list2.value = drop_down_list1[0];
  drop_down_list3.value = drop_down_list1[0];
  comment.value = "";
  date.value = currentDate;
});
