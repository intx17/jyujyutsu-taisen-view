/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInfectedData = /* GraphQL */ `
  subscription OnCreateInfectedData {
    onCreateInfectedData {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInfectedData = /* GraphQL */ `
  subscription OnUpdateInfectedData {
    onUpdateInfectedData {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInfectedData = /* GraphQL */ `
  subscription OnDeleteInfectedData {
    onDeleteInfectedData {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      name
      maxHP
      woeid
      prefecture
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inSelectedCommandList
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          playerHP
          curseHP
          histories
          trends
          playerID
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      name
      maxHP
      woeid
      prefecture
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inSelectedCommandList
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          playerHP
          curseHP
          histories
          trends
          playerID
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      name
      maxHP
      woeid
      prefecture
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inSelectedCommandList
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          playerHP
          curseHP
          histories
          trends
          playerID
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
export const onCreateCurse = /* GraphQL */ `
  subscription OnCreateCurse {
    onCreateCurse {
      id
      name
      negative
      maxHP
      attack
      hitRate
      imgSrc
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
      negative
      maxHP
      attack
      hitRate
      imgSrc
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
      negative
      maxHP
      attack
      hitRate
      imgSrc
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
      criticalRate
      isOutdoor
      inSelectedCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
      criticalRate
      isOutdoor
      inSelectedCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
      criticalRate
      isOutdoor
      inSelectedCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
      playerHP
      curseHP
      histories
      trends
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
        negative
        maxHP
        attack
        hitRate
        imgSrc
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
      playerHP
      curseHP
      histories
      trends
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
        negative
        maxHP
        attack
        hitRate
        imgSrc
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
      playerHP
      curseHP
      histories
      trends
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
        negative
        maxHP
        attack
        hitRate
        imgSrc
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
