function deepMergeObjects(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
    for (const key in source) {
      if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (typeof target[key] !== 'object' || Array.isArray(target[key])) {
          target[key] = {} as any;
        }
        target[key] = deepMergeObjects(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  
  const user1 = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zipCode: '10001',
    },
  };
  
  const user2 = {
    age: 35,
    address: {
      state: 'NY',
    },
    hobbies: ['Reading', 'Cooking'],
  };
  
  const mergedUser = deepMergeObjects(user1, user2);
  console.log(mergedUser);
  