// Use "brand" convention to uniquely identify object type
// Note: Brand is string literal type added to non-existing property
// In case two interfaces have same structure and could otherwise assert equivalence

interface MajorCredits {
  // Interface with brand property to distinguish from MinorCredits
  brand: 'major';
  credits: number;
}

interface MinorCredits {
  // Interface with brand property to distinguish from Major Credits
  brand: 'minor';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  // Function to sum credits from MajorCredits only
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  // Function to sum credits from MinorCredits only
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// const major1: MajorCredits = { brand: 'major', credits: 5 };
// const major2: MajorCredits = { brand: 'major', credits: 10 };
// console.log(sumMajorCredits(major1, major2));
// const minor1: MinorCredits = { brand: 'minor', credits: 1 };
// const minor2: MinorCredits = { brand: 'minor', credits: 2 };
// console.log(sumMinorCredits(minor1, minor2));
// console.log(sumMajorCredits(minor1, major1));
