import { faker } from "@faker-js/faker";

export function generateProjects(count = 1000) {
  const categories = ["Technology", "Education", "Health", "Art", "Environment"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.company.name(),
    description: faker.lorem.sentence(),
    location: faker.location.city(),
    category: faker.helpers.arrayElement(categories),
    createdAt: faker.date.past().toISOString(),
  }));
}
