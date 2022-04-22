import { normalize, schema } from 'normalizr';

// Define schema - note that idAttribute is "id" by default which is accurate to courseList
const courses = new schema.Entity('courses');

const coursesNormalizer = (data) => {
  // Normalize data according to courses schema
  const normalizedData = normalize(data, [courses]);
  // Return normalized data at key "entities" and then "courses"
  return normalizedData.entities.courses;
};

export default coursesNormalizer;
