// Подключение функционала "Чертогов Фрилансера"
import {isMobile, removeClasses} from "./functions.js";
// Подключение списка активных модулей

// Calculator
const poolSelect = document.getElementById("poolSelect");
const calcInput = document.getElementById("calcInput");
const investButton = document.getElementById("investButton");
const monthlyIncome = document.getElementById("monthlyIncome");
const monthlyPercentage = document.getElementById("monthlyPercentage");
const totalIncome = document.getElementById("totalIncome");
const totalPercentage = document.getElementById("totalPercentage");
const goldBar = document.getElementById("goldBar");

const calcOptions = [
  { value: "pool4", procent: 8, body: 100, months: 6, prize: false },
  { value: "pool9", procent: 10, body: 100, months: 9, prize: false },
  { value: "pool12", procent: 12, body: 100, months: 12, prize: false },
  { value: "pool20", procent: 20, body: 1000, months: 12, prize: true },
];

function getCurrentCalc() {
  return calcOptions.find((option) => option.value === poolSelect.value);
}

function showErrorMessage(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideErrorMessage() {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.style.display = "none";
}

export function updateResults() {
  const currentCalc = getCurrentCalc();
  const sum = parseFloat(calcInput.value) || 0;
  const monthlyIncomeValue = (sum / 100) * currentCalc.procent;
  const totalIncomeValue =
    (sum / 100) * currentCalc.procent * currentCalc.months;
  const totalPercentageValue = currentCalc.procent * currentCalc.months;

  monthlyIncome.textContent = `$${Math.round(monthlyIncomeValue)}`;
  monthlyPercentage.textContent = `${currentCalc.procent}%`;
  totalIncome.textContent = `$${Math.round(totalIncomeValue)}`;
  totalPercentage.textContent = `${totalPercentageValue}%`;

  if (sum < currentCalc.body) {
    investButton.disabled = true;
    goldBar.style.display = "none";
    showErrorMessage(`Минимальная сумма инвестиций ${currentCalc.body}$`);
  } else {
    investButton.disabled = false;
    hideErrorMessage();
    if (currentCalc.prize) {
      goldBar.style.display = "flex";
    } else {
      goldBar.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", documentActions);

  // Actions (делегирование события click)
  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth >= 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__link")) {
        targetElement.closest(".menu__item").classList.toggle("_hover");
      }
      if (
        !targetElement.closest(".menu__item") &&
        document.querySelectorAll(".menu__item._hover").length > 0
      ) {
        removeClasses(
          document.querySelectorAll(".menu__item._hover"),
          "_hover"
        );
      }
    }
  }

  // Clipboard
  document.addEventListener(
    "click",
    function (e) {
      const targetElement = e.target;
      const copyInput = document.getElementById("copy-input");
      const copyInput2 = document.getElementById("copy-input2");
      // Only fire if the target has id copy
      if (!targetElement.classList.contains("copy")) return;
      try {
        if (copyInput) {
          const text = copyInput.value;
          copyInput.select();
          document.execCommand("copy");
          copyInput.blur();
          copyInput.value = "Скопировано в буфер обмена";
          setTimeout(function () {
            copyInput.value = text;
          }, 1200);
        }
        if (copyInput2) {
          const text = copyInput2.value;
          copyInput2.select();
          document.execCommand("copy");
          copyInput2.blur();
          copyInput2.value = "Скопировано в буфер обмена";
          setTimeout(function () {
            copyInput2.value = text;
          }, 1200);
        }
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    },
    false
  );

  // Calculator
  if (poolSelect) {
    poolSelect.addEventListener("input", () => {
      updateResults();
    });
  }

  if (calcInput) {
    calcInput.addEventListener("input", () => {
      calcInput.value = calcInput.value.replace(/[^0-9]/g, "");
      updateResults();
    });
  }
  if (poolSelect && calcInput) updateResults();

  //   Clock
  const clockElement = document.getElementById("clock");

  // Function to format the date in the desired format
  function formatDateTime(date) {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    return date.toLocaleString(undefined, options);
  }

  // Function to update the clock
  function updateClock() {
    if (clockElement) {
      const currentTime = new Date();
      clockElement.textContent = formatDateTime(currentTime);
    }
  }

  // Update the clock immediately
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 60000);
});
