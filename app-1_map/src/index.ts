/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

// displaying user and company info on screen
user.show(document.querySelector(".user"));
company.show(document.querySelector(".company"));

// don't need to capture new object creation everytime in a variable. so we can simply do this as well
// new CustomMap(document.querySelector(".g-map"));
const map = new CustomMap(document.querySelector(".g-map"));
map.addMarker(user)
map.addMarker(company)
