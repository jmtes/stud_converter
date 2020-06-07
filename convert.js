function setUp() {
  const UI = {
    selectors: {
      conversionField: document.getElementById('conversion'),
      unitsField: document.getElementById('units'),
      submitBtn: document.getElementById('submit-btn'),
      result: document.querySelector('p.result'),
      before: document.getElementById('before'),
      after: document.getElementById('after')
    },
    displayResult: function(units, from, result) {
      this.selectors.result.style.display = 'none';

      this.selectors.before.textContent = `${units} ${from}`;
      this.selectors.after.textContent = `${result} studs`;

      this.selectors.result.style.display = 'block';
    }
  };

  const Conversions = {
    ft: units => units / 0.9186,
    in: units => units / 11.0236,
    m: units => units / 0.28,
    cm: units => units / 28
  };

  const submitClick = () => {
    if (UI.selectors.unitsField.value) {
      // Get unit and number of units
      const convertFrom = UI.selectors.conversionField.value;
      const units = Number(UI.selectors.unitsField.value);

      // Do conversion and then fix result to 3 decimal places
      let result = Conversions[convertFrom](units);
      result = result.toFixed(3);

      // Display result
      UI.displayResult(units, convertFrom, result);
    }
  };

  // Set up event listener
  UI.selectors.submitBtn.addEventListener('click', submitClick);
}

document.addEventListener('DOMContentLoaded', setUp);
