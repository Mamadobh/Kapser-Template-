let icn_element = document.querySelector(".symb");
let option_elelment = document.querySelector(".option");
let left_elemnt = document.querySelector(".left");
let right_element = document.querySelector(".right");
let landing_element = document.querySelector(".landing");
let boule_element = document.querySelectorAll(".boule");
let text_element = document.querySelector("#text");
let info_element = document.querySelector(".options-info");
let black_phone = document.querySelector(".black");
let white_phone = document.querySelector(".white");
let text_info = document.querySelector(".text-info");
let services_section = document.querySelector("#servicesid");
let content_land = document.querySelector("#content-land");
let image_collection = [
  "url(../images/landing.jpg)",
  "url(../images/landing1.jpg)",
  "url(../images/landing2.jpg)",
];

let animation_collection = [
  "animation: to_top 1.5s ease-in-out 0.7s",
  "animation: to_left 1.5s ease-in-out 0.7s ",
  "animation: to_bottom 1.5s ease-in-out 0.7s",
];

//Start header
icn_element.onclick = function () {
  option_elelment.classList.toggle("mega-menu");
};
//End header

// Start landing

if (window.localStorage.getItem("background")) {
  landing_element.style.backgroundImage =
    window.localStorage.getItem("background");
  boule_element[
    image_collection.indexOf(window.localStorage.getItem("background"))
  ].classList.add("activ");
  text_element.style.cssText =
    animation_collection[
      image_collection.indexOf(window.localStorage.getItem("background"))
    ];
  console.log(text_element.style.animation);
}
landing_element.classList.remove("right-landing");
landing_element.classList.remove("left-landing");

right_element.addEventListener("click", (e) => {
  let land_style = getComputedStyle(landing_element);

  let actuel_image =
    "url(.." + land_style.backgroundImage.match(/(\/\w+\/\w+)?.jpg/gi) + ")";
  if (image_collection.indexOf(actuel_image) === 2) {
    landing_element.style.backgroundImage = image_collection[0];
    text_element.style.cssText = animation_collection[0];

    boule_element.forEach((e) => {
      e.classList.remove("activ");
    });
    boule_element[0].classList.add("activ");
    window.localStorage.setItem("background", image_collection[0]);
  } else {
    landing_element.style.backgroundImage =
      image_collection[image_collection.indexOf(actuel_image) + 1];
    boule_element.forEach((e) => {
      e.classList.remove("activ");
    });
    text_element.style.cssText =
      animation_collection[image_collection.indexOf(actuel_image) + 1];
    boule_element[image_collection.indexOf(actuel_image) + 1].classList.add(
      "activ"
    );
    window.localStorage.setItem(
      "background",
      image_collection[image_collection.indexOf(actuel_image) + 1]
    );
  }
});

left_elemnt.addEventListener("click", (e) => {
  let land_style = getComputedStyle(landing_element);
  let actuel_image =
    "url(.." + land_style.backgroundImage.match(/(\/\w+\/\w+)?.jpg/gi) + ")";

  if (image_collection.indexOf(actuel_image) === 0) {
    landing_element.style.backgroundImage = image_collection[2];
    text_element.style.cssText = animation_collection[2];
    boule_element.forEach((e) => {
      e.classList.remove("activ");
    });
    boule_element[2].classList.add("activ");
    window.localStorage.setItem("background", image_collection[2]);
  } else {
    landing_element.style.backgroundImage =
      image_collection[image_collection.indexOf(actuel_image) - 1];
    text_element.style.cssText =
      animation_collection[image_collection.indexOf(actuel_image) - 1];
    boule_element.forEach((e) => {
      e.classList.remove("activ");
    });
    boule_element[image_collection.indexOf(actuel_image) - 1].classList.add(
      "activ"
    );
    window.localStorage.setItem(
      "background",
      image_collection[image_collection.indexOf(actuel_image) - 1]
    );
  }
});

let compteur;
function update(x) {
  if (x.matches) {
    land_style = getComputedStyle(landing_element);
    actuel_image =
      "url(.." + land_style.backgroundImage.match(/(\/\w+\/\w+)?.jpg/gi) + ")";
    let i = image_collection.indexOf(actuel_image);
    compteur = setInterval(function myFunction() {
      if (i === 2) {
        landing_element.style.backgroundImage = image_collection[0];
        i = 0;
      } else {
        landing_element.style.backgroundImage = image_collection[i + 1];
        i++;
      }
    }, 3000);
  } else {
    clearInterval(compteur);
  }
}
// ===================== Start Services ===================
// let contact_section = document.querySelector(".contact");
let services_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("head")) {
        setTimeout(() => {
          entry.target.style.animation = `translate_to_bottomH 1s  ease-out  both `;
        }, 0);
      } else if (entry.target.classList.contains("service-toLeft")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_leftP 1s ease both";
        }, 0);
      } else if (entry.target.classList.contains("service-toRight")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_rightP 1s ease both";
        }, 0);
      }
      observer.unobserve(services_section);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }
  );
});

let services_toLeft = document.querySelectorAll(".service-toLeft");
let service_toRight = document.querySelectorAll(".service-toRight");
console.log(service_toRight);
let head_services = document.querySelector("#servicesid  .head ");

services_observer.observe(services_toLeft[0]);
services_observer.observe(services_toLeft[1]);
services_observer.observe(service_toRight[0]);
services_observer.observe(service_toRight[1]);
services_observer.observe(head_services);

// ===================== End Services ===================

// ===================== Start Portfolio ===================

var x = window.matchMedia("(max-width:767px)");
update(x);
x.addListener(update);
// End landing
const { scrollTop, clientHeight } = document.documentElement;
window.addEventListener("scroll", () => {
  const topElementToTheScreenStart = text_info.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTheScreenStart).toFixed() - clientHeight
  ) {
    text_info.style.animation = " text-to-left 1s ease-in-out both";
    black_phone.style.animation = "  black-phone 1s ease-in-out 1s forwards";
    white_phone.style.animation = " white-phone 1.5s ease-in-out 1s forwards";
  }
});
let test_Element = document.querySelector(".show-photo");
// Start portfolio
let overlay_pop_up = document.querySelector(".overlay-portfolio");
let pop_up_element = document.querySelector("#pop_up");
let element_toShow_popUP = document.querySelectorAll(".icnAdd");
let icn_delete_popUp = document.querySelector("#delete_popUp");
let left_popUp_btn = document.querySelector(".left_pop_up");
let right_popUp_btn = document.querySelector(".right_pop_up");
let galery_element = document.querySelectorAll(".imageGl");
let title_popUP_array = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];
let title_element = document.querySelector(".titleP");
let galery_kind = document.querySelectorAll(".galery_kind");
galery_kind.forEach((elm) => {
  elm.addEventListener("click", (ev) => {
    if (elm.innerHTML === "All") {
      galery_element.forEach((e) => {
        e.style.display = "block";
      });
    } else {
      galery_element.forEach((el) => {
        if (elm.innerHTML === el.dataset.kind) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });
    }
  });
});

element_toShow_popUP.forEach((el) => {
  el.addEventListener("click", (e) => {
    pop_up_element.classList.remove("Leftanimation");
    pop_up_element.classList.remove("Rightanimation");
    overlay_pop_up.classList.add("show");
    pop_up_element.style.backgroundImage =
      "url(../" +
      el.previousElementSibling.src.match(/(\/\w+\/\w+\W?\d+)?.jpg/gi) +
      ")";
  });
});
icn_delete_popUp.addEventListener("click", (e) => {
  overlay_pop_up.classList.remove("show");
});

let pop_up_style = getComputedStyle(pop_up_element);

left_popUp_btn.addEventListener("click", (ev) => {
  pop_up_element.classList.remove("Leftanimation");
  pop_up_element.classList.remove("Rightanimation");

  setTimeout(() => {
    pop_up_element.classList.add("Leftanimation");
  }, 0);

  if (
    galery_element[0].firstElementChild.src.match(
      /(\/\w+\/\w+\W?\d+)?.jpg/gi
    )[0] === pop_up_style.backgroundImage.match(/(\/\w+\/\w+\W?\d+)?.jpg/gi)[0]
  ) {
    pop_up_element.style.backgroundImage =
      "url(../" +
      galery_element[galery_element.length - 1].firstElementChild.src.match(
        /(\/\w+\/\w+\W?\d+)?.jpg/gi
      ) +
      ")";
    title_element.innerHTML =
      "title " + title_popUP_array[galery_element.length - 1];
  } else {
    galery_element.forEach((elem, Index) => {
      if (
        pop_up_style.backgroundImage.match(/(\/\w+\/\w+\W?\d+)?.jpg/gi)[0] ===
        elem.firstElementChild.src.match(/(\/\w+\/\w+\W?\d+)?.jpg/gi)[0]
      ) {
        title_element.innerHTML = "title " + title_popUP_array[Index - 1];

        pop_up_element.style.backgroundImage =
          "url(../" +
          galery_element[Index - 1].firstElementChild.src.match(
            /(\/\w+\/\w+\W?\d+)?.jpg/gi
          ) +
          ")";
      }
    });
  }
});

right_popUp_btn.addEventListener("click", (ev) => {
  pop_up_element.classList.remove("Leftanimation");
  pop_up_element.classList.remove("Rightanimation");
  setTimeout(() => {
    pop_up_element.classList.add("Rightanimation");
  }, 0);
  if (
    galery_element[galery_element.length - 1].firstElementChild.src.match(
      /(\/\w+\/\w+\W?\d+)?.jpg/gi
    )[0] === pop_up_style.backgroundImage.match(/(\/\w+\/\w+\W?\d+)?.jpg/gi)[0]
  ) {
    pop_up_element.style.backgroundImage =
      "url(../" +
      galery_element[0].firstElementChild.src.match(
        /(\/\w+\/\w+\W?\d+)?.jpg/gi
      ) +
      ")";
    title_element.innerHTML = "title " + title_popUP_array[0];
  } else {
    let i = 0;
    while (
      pop_up_style.backgroundImage.match(/(\/\w+\/\w+\W?\d+)?.jpg/gi)[0] !==
      galery_element[i].firstElementChild.src.match(
        /(\/\w+\/\w+\W?\d+)?.jpg/gi
      )[0]
    ) {
      i++;
    }

    pop_up_element.style.backgroundImage =
      "url(../" +
      galery_element[i + 1].firstElementChild.src.match(
        /(\/\w+\/\w+\W?\d+)?.jpg/gi
      ) +
      ")";
    title_element.innerHTML = "title " + title_popUP_array[i + 1];
  }
});
//
let portfolio_section = document.querySelector(".portfolio");
let potfolio_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("head")) {
        setTimeout(() => {
          entry.target.style.animation = `pricing-animation 1s  ease-out  both `;
        }, 0);
      } else if (entry.target.classList.contains("type")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_leftP 1s ease both";
        }, 0);
      } else if (entry.target.classList.contains("image-portfolio")) {
        setTimeout(() => {
          entry.target.style.animation = "scale_image 0.7s ease-out both";
        }, 0);
      }
      observer.unobserve(portfolio_section);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: window.innerWidth > 768 ? 1 : 0.2,
    }
  );
});
let portfolio_head = document.querySelector(".portfolio .head");
let portfolio_type = document.querySelector(".portfolio .type");
let portfolio_image = document.querySelectorAll(".image-portfolio");

potfolio_observer.observe(portfolio_head);
potfolio_observer.observe(portfolio_type);
portfolio_image.forEach((el) => {
  potfolio_observer.observe(el);
});
// ===================== End Portfolio ===================
// ========================================================================================================================
// Start video
// ========================================================================================================================

let video_section = document.querySelector(".video-section");
let video_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("parg_video")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_bottom 1s ease both";
        }, 0);
      } else if (entry.target.classList.contains("btn_video")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_top 1s ease both";
        }, 0);
      }
      observer.unobserve(video_section);

    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }
  );
});
let btn_video = document.querySelectorAll(".btn_video");
let parg_video = document.querySelector(".parg_video");

video_observer.observe(parg_video);
video_observer.observe(btn_video[0]);
video_observer.observe(btn_video[1]);



// ========================================================================================================================
// End Video
// ========================================================================================================================

// ========================================================================================================================
// Start About
// ========================================================================================================================
let section_numbers = document.querySelector(".statistique");
let stat_numbers = document.querySelectorAll(".stat_number");
let i = 0;
observer_ob = new IntersectionObserver((entries, observer) => {
  entries.forEach((entrie, index) => {
    // stat_numbers.forEach((el)=>{
    //   if
    // })
    if (!entrie.isIntersecting) return;
    if (entrie.target.classList.contains("font")) {
      entrie.target.style.animation = `translate_to_bottomH 1s  ease-out  both`;
    }
    if (entrie.target.classList.contains("head")) {
      entrie.target.style.animation = `pricing-animation 1s  ease-out  both`;
    }

    // console.log(entrie.target.parentElement);
    // console.log(entrie.target.outerHTML);
    let speed = 100;
    // stat_numbers.forEach((el, index) => {
    //   console.log(el.dataset.stat);

    function Countt_Number() {
      const target_number = +entrie.target.dataset.stat;
      const initial_counter = +entrie.target.innerText;
      const step_count = target_number / speed;
      if (+entrie.target.dataset.stat === 2500) {
        if (initial_counter < target_number) {
          entrie.target.innerText = Math.ceil(initial_counter + step_count);
          setTimeout(Countt_Number, 16);
        }
      } else if (+entrie.target.dataset.stat === 120) {
        if (initial_counter < target_number) {
          entrie.target.innerText = Math.ceil(initial_counter + step_count);
          setTimeout(Countt_Number, 24);
        }
      } else {
        if (initial_counter < target_number) {
          entrie.target.innerText = Math.ceil(initial_counter + step_count);
          setTimeout(Countt_Number, 20);
        }
      }
    }

    Countt_Number();
    entrie.target.parentElement.style.animation = `stat_animation .7s ease both ${
      i / stat_numbers.length
    }s`;
    i++;
    observer.unobserve(section_numbers);
  }),
    {
      root: null,
      threshold: window.innerWidth > 768 ? 1 : 1,
      // rootMargin: "-200px",
    };
});

let image_about = document.querySelector(".about .font");
let head_about = document.querySelector(".about .head");

observer_ob.observe(head_about);
observer_ob.observe(image_about);
stat_numbers.forEach((el) => {
  observer_ob.observe(el);
});
// ==========  End Stat  ===================

//======================Start Team=========================
let team_double = document.querySelectorAll(".double");
let bulles = document.querySelectorAll(".bl");

bulles.forEach((bulle, In) => {
  bulle.addEventListener("click", (e) => {
    console.log("cbn");
    // console.log( bulles);
    // console.log(e.target)
    // console.log(In)
    let boule_clicked = In;

    bulles.forEach((el, Index) => {
      if (el.classList.contains("active")) {
        prev_active_boule = Index;
      }
      el.classList.remove("active");
    });
    if (prev_active_boule < boule_clicked) {
      // if(team_double[boule_clicked].style.animation){

      setTimeout(() => {
        for (let i = prev_active_boule; i < boule_clicked; i++) {
          team_double[
            i
          ].style.animation = `prev_team_animation_letf .4s ease both`;
          team_double[
            i + 1
          ].style.animation = `team_animation_letf .4s ease both 0.2s`;
        }
      }, 0);
    } else if (prev_active_boule > boule_clicked) {
      setTimeout(() => {
        let i = prev_active_boule;
        while (i != boule_clicked) {
          team_double[
            i
          ].style.animation = `prev_team_animation_right .4s ease both`;
          team_double[
            i - 1
          ].style.animation = `team_animation_right .4s ease both 0.2s`;

          i--;
        }
      }, 0);
    }
    e.target.classList.add("active");
    setTimeout(
      team_double.forEach((el, Ind) => {
        if (Ind != boule_clicked) {
          el.classList.add("disabled_team");
        } else {
          el.classList.remove("disabled_team");
        }
      }),
      1000
    );
  });
});

let a = 0;

let section_team = document.querySelector(".team");
let team_content = document.querySelector(".team-info");
let skills = document.querySelectorAll(".range");
let skill_introduction = document.querySelector(".skill-text");
observerSkill = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (
        entry.target.classList.contains("range") &&
        entry.target.getAnimations().length == 0
      ) {
        entry.target.parentElement.parentElement.style.animation = `skill_animation .5s ease  ${a}s both`;
        a += 0.15;
        setTimeout(() => {
          entry.target.parentElement.previousElementSibling.style.cssText =
            entry.target.parentElement.previousElementSibling.style.cssText +
            `left:${entry.target.dataset.skill}%;`;
          entry.target.style.cssText =
            entry.target.style.cssText +
            `Width:${entry.target.dataset.skill}% !important;`;
        }, 1500);
      }

      if (entry.target.classList.contains("skill-text")) {
        entry.target.style.animation = `skill_animation .6s ease both`;
      }
      observer.unobserve(section_team);
    },
    {
      root: null,
      threshold: 1,
    }
  );
});
observeTeam = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry, index) => {
      if (!entry.isIntersecting) return;

      if (entry.target.getAnimations().length == 0) {
        console.log("raho d5al ya 3imad");
        setTimeout(() => {
          entry.target.style.animation = `team_animation .6s ease both`;
          observer.unobserve(section_team);
        }, 0);
      }
    },
    {
      root: null,
      threshold: 1,
    }
  );
});

let team_elements = team_content.childNodes;
// console.log(team_elements);
skills.forEach((el) => {
  observerSkill.observe(el);
});

observerSkill.observe(skill_introduction);
for (let k = 0; k < team_elements.length; k++) {
  if (team_elements[k].nodeName.toLowerCase() == "div") {
    observeTeam.observe(team_elements[k]);
  }
}

//======================End Team=========================
//======================Start Quote=======================

quote_section = document.querySelector(".quote");
quote_container = document.querySelector(".quote_container");
observeQuote = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry, index) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.style.animation = "quote_animation 1s ease-in-out both";
        observer.unobserve(quote_section);
      });
    },
    {
      root: null,
      threshold: 1,
    }
  );
});

observeQuote.observe(quote_container);

//======================End Quote=========================
//======================Start Pricing=========================
let pricing_section = document.querySelector(".pricing");
let head_pricing = document.querySelector(".pricing .head");
let allPricing_cart = document.querySelectorAll(".price-carte");
let all = [...allPricing_cart];

let contact_pricing = document.querySelector(".ctn");
let k = 0;
let pricing_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("head")) {
        setTimeout(() => {
          entry.target.style.animation = `pricing-animation 1s  ease-out  both `;
        }, 0);
      } else if (
        entry.target.classList.contains("price-carte") &&
        entry.target.getAnimations().length == 0
      ) {
        counter = setTimeout(() => {
          k = k + 0.15;
          // x = all.indexOf(entry.target) / 4;
          entry.target.style.animation = `cart-pricing-animation 0.7s ease-in-out ${k}s  both `;
        }, 0);
      } else if (entry.target.classList.contains("ctn")) {
        setTimeout(() => {
          entry.target.style.animation = `pricing-animation 0.8s ease-in-out both
          `;
        }, 0);
      }

      observer.unobserve(pricing_section);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: window.innerWidth > 768 ? 0.55 : 0.1,
    }
  );
});

pricing_observer.observe(head_pricing);
allPricing_cart.forEach((el) => {
  pricing_observer.observe(el);
});
pricing_observer.observe(contact_pricing);

//======================End princing =========================
//==================== Start Subscribe =======================
let subscribe_section = document.querySelector(".Email");
let subscribe_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("email-part")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_left 1s ease both";
        }, 0);
      } else if (entry.target.classList.contains("email-paragh")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_right 1s ease both";
        }, 0);
      }
      observer.unobserve(subscribe_section);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: window.innerWidth > 768 ? 0.55 : 0.1,
    }
  );
});
let email_part = document.querySelector(".email-part");
let email_paragraphe = document.querySelector(".email-paragh");
subscribe_observer.observe(email_part);
subscribe_observer.observe(email_paragraphe);

//==================== End Subscribe =======================
//==================== Start Contact =======================
let contact_section = document.querySelector(".contact");
let contact_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("head")) {
        setTimeout(() => {
          entry.target.style.animation = `pricing-animation 1s  ease-out  both `;
        }, 0);
      } else if (entry.target.classList.contains("form")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_left 1s ease both";
        }, 0);
      } else if (entry.target.classList.contains("form-info")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_right 1s ease both";
        }, 0);
      }
      observer.unobserve(contact_section);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }
  );
});

let form_cn = document.querySelector(".form");
let form_info = document.querySelector(".form-info");
let head_contact = document.querySelector(".contact .head ");

contact_observer.observe(head_contact);
contact_observer.observe(form_cn);
contact_observer.observe(form_info);

//==================== End Contact =======================

//==================== Start Footer =======================

let footer_section = document.querySelector(".footer");
let footer_observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(
    (entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("footer-logo")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_bottom 1s ease both";
        }, 0);
      } else if (entry.target.classList.contains("socail")) {
        setTimeout(() => {
          entry.target.style.animation = "translate_to_top 1s ease both";
        }, 0);
      }
      observer.unobserve(footer_section);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }
  );
});
let logo_f = document.querySelector(".footer-logo");
let socail_f = document.querySelector(".socail");

footer_observer.observe(logo_f);
footer_observer.observe(socail_f);

//==================== End Footer =======================
