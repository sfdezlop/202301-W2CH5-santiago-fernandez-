// //Setup parameters
const numberOfRowsOfTheFrame = 11;
const numberOfColumnsOfTheFrame = 11;
const frame = [];
export let frameTest=[]
const initialPatternChoice = 'X5x'; // X5x, K3x, /2x
const characterToShowForALivingCell = '\xA9'; //\xdd '😊'
const characterToShowForADeadCell = ' '; //'\xF8'
const characterToShowForANoCell = ' ';
const characterToShowForJoin = '.'; //'.'
const numberOfIterations = 10;

// const intervale = setInterval(() => {
//   iterationAlgorithm();
// }, 100);

const initialPattern = [
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 1,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 1,
    relativeColumn: 5,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 2,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 2,
    relativeColumn: 4,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 3,
    relativeColumn: 3,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 4,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 4,
    relativeColumn: 4,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 5,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 1,
    pattern: 'X5x',
    relativeRow: 5,
    relativeColumn: 5,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  //patern /2x
  {
    idGame: 2,
    pattern: '/2x',
    relativeRow: 1,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: '',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: ' ',
  },
  {
    idGame: 2,
    pattern: '/2x',
    relativeRow: 1,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 2,
    pattern: '/2x',
    relativeRow: 2,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 2,
    pattern: '/2x',
    relativeRow: 2,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: '',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: ' ',
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 1,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 1,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 1,
    relativeColumn: 3,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 2,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 33,
    pattern: 'K3x',
    relativeRow: 2,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 2,
    relativeColumn: 3,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 3,
    relativeColumn: 1,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 3,
    relativeColumn: 2,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
  {
    idGame: 3,
    pattern: 'K3x',
    relativeRow: 3,
    relativeColumn: 3,
    absoluteRow: 0,
    absoluteColumn: 0,
    absoluteRowColumn: 'r0c0',
    cellStatus: 'A',
    contiguousCells: 0,
    cellNextStatus: '',
    cellColor: characterToShowForALivingCell,
  },
];

function relativeCenterRowOfAPattern(a) {
  const relativeRows = [];
  relativeRows.shift();
  for (
    let i = 0;
    i < initialPattern.filter((element) => element.pattern === a).length;
    i++
  ) {
    relativeRows.push(
      initialPattern.filter((element) => element.pattern === a)[i].relativeRow
    );
  }

  const minRelativeRow = Math.min(...relativeRows);
  const maxRelativeRow = Math.max(...relativeRows);
  return (maxRelativeRow + minRelativeRow) / 2;
}

function relativeCenterColumnOfAPattern(a) {
  const relativeColumns = [];
  relativeColumns.shift();
  for (
    let i = 0;
    i < initialPattern.filter((element) => element.pattern === a).length;
    i++
  ) {
    relativeColumns.push(
      initialPattern.filter((element) => element.pattern === a)[i]
        .relativeColumn
    );
  }

  const minRelativeColumn = Math.min(...relativeColumns);
  const maxRelativeColumn = Math.max(...relativeColumns);
  return (maxRelativeColumn + minRelativeColumn) / 2;
}

function editAbsoluteRowsAndColumnsAtInitialPattern() {
  for (let i = 0; i < initialPattern.length; i++) {
    initialPattern[i].absoluteRow = Math.round(
      initialPattern[i].relativeRow +
        numberOfRowsOfTheFrame / 2 -
        relativeCenterRowOfAPattern(initialPattern[i].pattern)
    );

    initialPattern[i].absoluteColumn = Math.round(
      initialPattern[i].relativeColumn +
        numberOfColumnsOfTheFrame / 2 -
        relativeCenterColumnOfAPattern(initialPattern[i].pattern)
    );
  }
}

class Cell {
  constructor(
    idGame,
    iteration,
    date,
    row,
    column,
    cellStatus,
    contiguousCells,
    cellNextStatus,
    cellColor
  ) {

    this.idGame = idGame;
    this.iteration = iteration;
    this.date = date;
    this.row = row;
    this.column = column;
    this.cellStatus = cellStatus;
    this.contiguousCells = contiguousCells;
    this.cellNextStatus = cellNextStatus;
    this.cellColor = characterToShowForANoCell;
    this.rowColumn = 'r' + this.row + 'c' + this.column;
  }
}

function generateEmptyFrame() {
  for (let i = 1; i <= numberOfRowsOfTheFrame; i++) {
    for (let j = 1; j <= numberOfColumnsOfTheFrame; j++) {
      frame.push(
        new Cell(
          1,
          0,
          americanLargeFormatOfADate(new Date()),
          i,
          j,
          'E',
          0,
          '',
          characterToShowForANoCell
        )
      );
    }
  }
  return;
}

function americanLargeFormatOfADate(a) {
  let year = a.getFullYear();
  let month, day, hour, minute, second;
  if (Number(a.getMonth() + 1) < 10) {
    month = '0' + (a.getMonth() + 1);
  } else {
    month = a.getMonth() + 1;
  }
  if (a.getDate() < 10) {
    day = '0' + a.getDate();
  } else {
    day = a.getDate();
  }
  if (a.getHours() < 10) {
    hour = '0' + a.getHours();
  } else {
    hour = a.getHours();
  }
  if (a.getMinutes() < 10) {
    minute = '0' + a.getMinutes();
  } else {
    minute = a.getMinutes();
  }
  if (a.getSeconds() < 10) {
    second = '0' + a.getSeconds();
  } else {
    second = a.getSeconds();
  }
  let result =
    year +
    '/' +
    month +
    '/' +
    day +
    ' ' +
    hour +
    ':' +
    minute +
    ':' +
    second +
    '.' +
    a.getMilliseconds();
  return result;
}

function pivotFrame() {
  const pivotTable = [
    {
      iteration: null,
      row: null,
      show: null,
    },
  ];
  pivotTable.shift();
  for (let l = 1; l <= numberOfRowsOfTheFrame; l++) {
    const tempArrayForRowsOfTheFrame = [];
    const tempArrayForShowOfCellsInALine = [];
    for (let m = 1; m <= numberOfColumnsOfTheFrame; m++) {
      tempArrayForRowsOfTheFrame.push(
        frame
          .filter((element) => element.iteration === maximumValueOfAIteration())
          .filter((item) => item.row === l)
          .filter((elemento) => elemento.column === m)[0].cellColor
      );
      tempArrayForShowOfCellsInALine.push(
        frame
          .filter((element) => element.iteration === maximumValueOfAIteration())
          .filter((item) => item.row === l)
          .filter((elemento) => elemento.column === m)[0].cellColor
      );
    }
    pivotTable.push({
      iteration: maximumValueOfAIteration(),
      row: l,
      show: tempArrayForShowOfCellsInALine.join(characterToShowForJoin),
    });
  }

  return pivotTable.filter(
    (element) => element.iteration === maximumValueOfAIteration()
  );
}

function updateInitialPatterWithRoWColumnInfo() {
  for (let i = 0; i < initialPattern.length; i++) {
    initialPattern[i].absoluteRowColumn =
      'r' +
      initialPattern[i].absoluteRow +
      'c' +
      initialPattern[i].absoluteColumn;
  }
}

function updateFrameWithInitialPattern(a) {
  for (let i = 0; i < initialPattern.length; i++) {
    for (let j = 0; j < frame.length; j++) {
      if (
        initialPattern[i].absoluteRowColumn === frame[j].rowColumn &&
        initialPattern[i].pattern === a
      ) {
        frame[j].cellStatus = initialPattern[i].cellStatus;
        frame[j].cellColor = initialPattern[i].cellColor;
      }
      frame[j].iteration = 1;
    }
  }
  return;
}

function updateFrameWithContiguousCells() {

  for (let i = 0; i < frame.length; i++) {
    const rcCoordenates = frame[i].rowColumn;
    const rcCoordenatesArray = rcCoordenates.split('r')[1].split('c');
    const rowCoordenates = Number(rcCoordenatesArray[0]);
    const columnCoordenates = Number(rcCoordenatesArray[1]);
    const accContiguousCell = 0;

    if (frame[i].cellStatus === 'A') {
      console.log(frame[i].rowColumn);
      console.log(
        contiguousPossiblePositionsOfAPosition(frame[i].row, frame[i].column)
      );
      for (
        let j = 0;
        j <
        contiguousPossiblePositionsOfAllPositionsButThis(
          rowCoordenates,
          columnCoordenates
        ).length;
        j++
      ) {
        if (
          frame.findIndex(
            (element) =>
              element.rowColumns ===
              contiguousPossiblePositionsOfAllPositionsButThis(
                rowCoordenates,
                columnCoordenates
              )
          ) > -1
        ) {
          accContiguousCell = accContiguousCell + 1;
          console.log('match');
        }
        frame[i].contiguousCells = accContiguousCell;
      }
    }
  }
}

function maximumValueOfAIteration() {

  let result = 0;
  for (let i = 0; i < frame.length; i++) {
    if (result < frame[i].iteration) {

      result = frame[i].iteration;
    }
  }
  return result;
}

function distanceBetweenLifeCells() {
  const lastIteration = maximumValueOfAIteration();
  for (let i = 0; i < frame.length; i++) {
    let acc = 0;
    

    for (let j = 0; j < frame.length; j++) {
      if (
        frame[i].cellStatus === 'A' &&
        frame[j].cellStatus === 'A' &&
        frame[i].iteration === lastIteration &&
        i != j &&
        Math.sqrt(
          Math.pow(Math.abs(frame[i].row - frame[j].row), 2) +
            Math.pow(Math.abs(frame[i].column - frame[j].column), 2)
        ) < 1.5
      ) {
        acc = acc + 1;
                frame[i].contiguousCells = acc;
      }
    }
  }
}

function distanceBetweenEmptyAndLifeCells() {
  const lastIteration = maximumValueOfAIteration();
  for (let i = 0; i < frame.length; i++) {
    let acc = 0;
    for (let j = 0; j < frame.length; j++) {
      if (
        frame[i].cellStatus === 'E' &&
        frame[j].cellStatus === 'A' &&
        frame[i].iteration === lastIteration &&
        i != j &&
        Math.sqrt(
          Math.pow(Math.abs(frame[i].row - frame[j].row), 2) +
            Math.pow(Math.abs(frame[i].column - frame[j].column), 2)
        ) < 1.5
      ) {
        acc = acc + 1;
        
        frame[i].contiguousCells = acc;
      }
    }
  }
}

function deliveryAlgorithm() {
  const lastIteration = maximumValueOfAIteration();

  for (let i = 0; i < frame.length; i++) {
    if (
      frame[i].cellStatus === 'E' &&
      frame[i].contiguousCells === 3 &&
      frame[i].iteration === lastIteration
    ) {
      frame[i].cellStatus = 'A';
      frame[i].cellColor = characterToShowForALivingCell;
    }
  }
}

function deathAlgorithm() {
  const lastIteration = maximumValueOfAIteration();
  for (let i = 0; i < frame.length; i++) {
    if (
      frame[i].cellStatus === 'A' &&
      (frame[i].contiguousCells < 2 || frame[i].contiguousCells > 3) &&
      frame[i].iteration === lastIteration
    ) {
      frame[i].cellStatus = 'E';
      frame[i].cellColor = characterToShowForADeadCell;
    }
    frame[i].iteration = lastIteration + 1;
  }
}

function initializeFrame() {
generateEmptyFrame();
console.table(pivotFrame());
editAbsoluteRowsAndColumnsAtInitialPattern();
updateInitialPatterWithRoWColumnInfo();
updateFrameWithInitialPattern(initialPatternChoice);
console.table(pivotFrame());
}

function iterationAlgorithm() {
  distanceBetweenEmptyAndLifeCells();
  distanceBetweenLifeCells();
  deliveryAlgorithm();
  deathAlgorithm();
  console.table(pivotFrame());
}

export function play() {
  initializeFrame()
  do {
    iterationAlgorithm();
  } while (maximumValueOfAIteration() < numberOfIterations);

frameTest=JSON.parse(JSON.stringify(frame))
}

play();
