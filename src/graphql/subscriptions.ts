/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInfectedData = /* GraphQL */ `
  subscription OnCreateInfectedData {
    onCreateInfectedData {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInfectedData = /* GraphQL */ `
  subscription OnUpdateInfectedData {
    onUpdateInfectedData {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInfectedData = /* GraphQL */ `
  subscription OnDeleteInfectedData {
    onDeleteInfectedData {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      hp
      woeid
      commands {
        items {
          id
          name
          description
          attack
          isOutdoor
          inCommandList
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          userHP
          curseHP
          inAreaExpansion
          userID
          curseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      hp
      woeid
      commands {
        items {
          id
          name
          description
          attack
          isOutdoor
          inCommandList
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          userHP
          curseHP
          inAreaExpansion
          userID
          curseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      hp
      woeid
      commands {
        items {
          id
          name
          description
          attack
          isOutdoor
          inCommandList
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          userHP
          curseHP
          inAreaExpansion
          userID
          curseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCommand = /* GraphQL */ `
  subscription OnCreateCommand {
    onCreateCommand {
      id
      name
      description
      attack
      isOutdoor
      inCommandList
      userID
      user {
        id
        name
        hp
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCommand = /* GraphQL */ `
  subscription OnUpdateCommand {
    onUpdateCommand {
      id
      name
      description
      attack
      isOutdoor
      inCommandList
      userID
      user {
        id
        name
        hp
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCommand = /* GraphQL */ `
  subscription OnDeleteCommand {
    onDeleteCommand {
      id
      name
      description
      attack
      isOutdoor
      inCommandList
      userID
      user {
        id
        name
        hp
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBattle = /* GraphQL */ `
  subscription OnCreateBattle {
    onCreateBattle {
      id
      date
      userHP
      curseHP
      inAreaExpansion
      userID
      user {
        id
        name
        hp
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      curseID
      curse {
        id
        name
        date
        minNegative
        maxNegative
        hp
        attack
        hitRate
        imgSrc
        trends
        battleID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBattle = /* GraphQL */ `
  subscription OnUpdateBattle {
    onUpdateBattle {
      id
      date
      userHP
      curseHP
      inAreaExpansion
      userID
      user {
        id
        name
        hp
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      curseID
      curse {
        id
        name
        date
        minNegative
        maxNegative
        hp
        attack
        hitRate
        imgSrc
        trends
        battleID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBattle = /* GraphQL */ `
  subscription OnDeleteBattle {
    onDeleteBattle {
      id
      date
      userHP
      curseHP
      inAreaExpansion
      userID
      user {
        id
        name
        hp
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      curseID
      curse {
        id
        name
        date
        minNegative
        maxNegative
        hp
        attack
        hitRate
        imgSrc
        trends
        battleID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCurse = /* GraphQL */ `
  subscription OnCreateCurse {
    onCreateCurse {
      id
      name
      date
      minNegative
      maxNegative
      hp
      attack
      hitRate
      imgSrc
      trends
      battleID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCurse = /* GraphQL */ `
  subscription OnUpdateCurse {
    onUpdateCurse {
      id
      name
      date
      minNegative
      maxNegative
      hp
      attack
      hitRate
      imgSrc
      trends
      battleID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCurse = /* GraphQL */ `
  subscription OnDeleteCurse {
    onDeleteCurse {
      id
      name
      date
      minNegative
      maxNegative
      hp
      attack
      hitRate
      imgSrc
      trends
      battleID
      createdAt
      updatedAt
    }
  }
`;
