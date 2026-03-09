let budgetValue = 0;

let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expenseEntry of expenseEntries) {
  totalExpensesValue = totalExpensesValue + expenseEntry[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (
    calculateBalance() > 0 &&
    calculateBalance() < budgetValue * 0.25
  ) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// função que calcula a soma das despesas de uma categoria de gastos
function calculateCategoryExpenses(category) {
  // soma de uma categoria específica
  let categorySum = 0;
  // loop que passa por todas as categorias
  for (expenseEntry of expenseEntries) {
    // criando a variável do valor da categoria
    let categoryValue = expenseEntry[1];
    // criando a variável da categoria específica
    let currentCategory = expenseEntry[0];
    // escolher se vou somar essa categoria ou não
    if (currentCategory === category) {
      categorySum += categoryValue;
    }
  }
  // retorna o valor para fora da função
  return categorySum;
}

// função para achar a maior categoria
function calculateLargestCategory() {
  let categoriesTotals = [];
  const uniqueCategories = new Set([
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ]);

  for (const uniqueCategory of uniqueCategories) {
    categoriesTotals.push([
      uniqueCategory,
      calculateCategoryExpenses(uniqueCategory),
    ]);
  }
  let largestCategoryValue = 0;
  let largestCategoryTitle = "";
  // loop dos totais das categorias
  for (categoryTotal of categoriesTotals) {
    // variavel que guarda o valor do elemento em voga
    let currentValue = categoryTotal[1];
    // variavel que guarda o nome da categoria em voga
    let currentCategory = categoryTotal[0];
    // condicional que verifica se o valor do elemento em voga é maior que o maior valor ja escontrado
    if (currentValue > largestCategoryValue) {
      largestCategoryValue = currentValue;
      largestCategoryTitle = currentCategory;
    }
  }
  return largestCategoryTitle;
}

function addExpenseEntry(values) {
  totalExpensesValue += values[1];
  expenseEntries.push(values);
}
