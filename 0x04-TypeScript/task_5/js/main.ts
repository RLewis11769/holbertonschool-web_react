// 2 interfaces with brand properties
// 2 functions that perform math based on properties of branded interfaces

// Note: Brand is string literal type added to non-existing property
// Because interfaces have same structure and could otherwise assert equivalence

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
