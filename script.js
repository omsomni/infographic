const atmosphere = document.querySelector(".atmosphere");
const biosphere = document.querySelector(".biosphere");
const hydrosphere = document.querySelector(".hydrosphere");
const geosphere = document.querySelector(".geosphere");

const atmosphere_text = document.getElementById("atmosphere_text");
const biosphere_text = document.getElementById("biosphere_text");
const hydrosphere_text = document.getElementById("hydrosphere_text");
const geosphere_text = document.getElementById("geosphere_text");

function sub_hover(element) {
  if (element.id === "atmosphere") {
    geosphere.classList.add("hidden");

    atmosphere_text.innerText =
      "The atmosphere is the layers of gases that surrounds a planet. Due to the gravitation foce of the earth, the atmosphere is present. This protects the planet from the heat of the sun.";
  } else if (element.id === "biosphere") {
    atmosphere.classList.add("hidden");

    biosphere_text.innerText =
      "The biosphere represents the parts of the Earth where living organisms exists, including ecosystems.";
  } else if (element.id === "hydrosphere") {
    geosphere.classList.add("hidden");

    hydrosphere_text.innerText =
      "Just like biosphere, instead of living organisms, hydrosphere is the total amount of water that is present on the Earth.";
  } else if (element.id === "geosphere") {
    hydrosphere.classList.add("hidden");

    geosphere_text.innerText =
      "Just like hydrosphere and biosphere, geosphere includes the rocks and minerals that are found on Earth, including molten rocks, heavy metals, sand and more.";
  }
}

function sub_out(element) {
  if (element.id === "atmosphere") {
    geosphere.classList.remove("hidden");

    atmosphere_text.innerHTML =
      "<img src='https://cdn.discordapp.com/attachments/730963410568609853/1040254953853300736/unknown.png' style='height: auto; width: 130px;  border-radius: 10px;'>";
  } else if (element.id === "biosphere") {
    atmosphere.classList.remove("hidden");

    biosphere_text.innerHTML =
      "<img src='https://cdn.discordapp.com/attachments/730963410568609853/1040257644587384832/image.png' style='height: 100px; width: 130px; border-radius: 10px;'>";
  } else if (element.id === "hydrosphere") {
    geosphere.classList.remove("hidden");

    hydrosphere_text.innerHTML =
      "<img src='https://cdn.discordapp.com/attachments/730963410568609853/1040258532680945736/unknown.png' style='height: auto; width: 130px; border-radius: 10px;'>";
  } else if (element.id === "geosphere") {
    hydrosphere.classList.remove("hidden");

    geosphere_text.innerHTML =
      "<img src='https://cdn.discordapp.com/attachments/730963410568609853/1040258882540408912/unknown.png'  style='height: auto; width: 130px; border-radius: 10px;'>";
  }
}

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

const first_text = document.getElementById("first_text");
const first_desc = document.getElementById("first_desc");

const second_text = document.getElementById("second_text");
const second_desc = document.getElementById("second_desc");

const third_text = document.getElementById("third_text");
const third_desc = document.getElementById("third_desc");

const fourth_text = document.getElementById("fourth_text");
const fourth_desc = document.getElementById("fourth_desc");

const fifth_text = document.getElementById("fifth_text");
const fifth_desc = document.getElementById("fifth_desc");

function clicked(e) {
  reset();

  if (e.id === "first") {
    reset_others();

    first_text.innerText =
      "The atmosphere is the one that protects the earth, therefore biosphere depends on the atmosphere in order to maintin its capability of habitability.";
    first_desc.innerText = "ATMOSPHERE & BIOSPHERE";

    third.classList.add("hidden");
    fourth.classList.add("hidden");
    fifth.classList.add("hidden");
  } else if (e.id === "second") {
    reset_others();

    second_text.innerText =
      "Since some species from the biosphere lives in hydrosphere, the two subsytems are related. ";
    second_desc.innerText = "BIOSPHERE & HYDROSPHERE";

    fourth.classList.add("hidden");
    fifth.classList.add("hidden");
    first.classList.add("hidden");
  } else if (e.id === "third") {
    reset_others();

    third_text.innerText =
      "Hydrosphere can help form rocks and other materials from the geosphere.";
    third_desc.innerText = "HYDROSPHERE & GEOSPHERE";

    fifth.classList.add("hidden");
    first.classList.add("hidden");
    second.classList.add("hidden");
  } else if (e.id === "fourth") {
    reset_others();

    fourth_text.innerText =
      "Rocks and materials from geosphere that are exposed to the atmosphere, or a gas from the atmosphere: oxygen, it can alter its physical or chemical state.";
    fourth_desc.innerText = "GEOSPHERE & ATMOSPHERE";

    first.classList.add("hidden");
    second.classList.add("hidden");
    third.classList.add("hidden");
  } else if (e.id === "fifth") {
    reset_others();

    fifth_text.innerText =
      "These four subsystems help the planet to be habitable. All of them depend on one another to create an environment that helps the living organisms that live within it.";
    fifth_desc.innerText = "ALL FOUR EARTH'S SUBSYSTEMS";

    second.classList.add("hidden");
    third.classList.add("hidden");
    fourth.classList.add("hidden");
  }
}

function reset() {
  first.classList.remove("hidden");
  second.classList.remove("hidden");
  third.classList.remove("hidden");
  fourth.classList.remove("hidden");
  fifth.classList.remove("hidden");
}

function reset_others() {
  first_text.innerText = "ATMOSPHERE";
  first_desc.innerText = "BIOSPHERE";

  second_text.innerText = "BIOSPHERE";
  second_desc.innerText = "HYDROSPHERE";

  third_text.innerText = "HYDROSPHERE";
  third_desc.innerText = "GEOSPHERE";

  fourth_text.innerText = "GEOSPHERE";
  fourth_desc.innerText = "ATMOSPHERE";

  fifth_text.innerText = "ALL FOUR EARTH'S SUBSYSTEMS";
  fifth_desc.innerText = "CLICK ME!";
}
