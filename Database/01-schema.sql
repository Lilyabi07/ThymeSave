IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'ThymeSave')
BEGIN
    CREATE DATABASE ThymeSave;
END
GO

USE ThymeSave;
GO

------------------------------------------------------------
-- ENUM TABLES
------------------------------------------------------------

--------Recipes
CREATE TABLE RecipeSource (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT CHK_RecipeSource CHECK (name IN ('OFFICIAL','USER_SUBMITTED'))
);

CREATE TABLE RecipeVisibility (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT CHK_RecipeVisibility CHECK (name IN ('PUBLIC','PRIVATE'))
);

CREATE TABLE RecipeStatus (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT CHK_RecipeStatus CHECK (name IN ('ACTIVE','INACTIVE','HIDDEN','REMOVED'))
);

CREATE TABLE RecipeCategory (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT CHK_RecipeCategory CHECK (name IN (
        'VEGAN','VEGETARIAN','KETO','GLUTEN_FREE','DAIRY_FREE','PALEO','OTHER'
    ))
);

----------Utils
CREATE TABLE UnitType (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT CHK_UnitType_Valid CHECK (name IN (
        'GRAM','KILOGRAM','LITER','MILLILITER',
        'CUP','TEASPOON','TABLESPOON','UNIT'
    ))
);

CREATE TABLE ImageType (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT CHK_ImageType_Valid CHECK (name IN (
        'RECIPE','INGREDIENT','USER_PROFILE'
    ))
);

------------------------------------------------------------
-- UTILITY SUB-DOMAIN
------------------------------------------------------------

CREATE TABLE Image (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    image NVARCHAR(MAX) NOT NULL,
    altText NVARCHAR(255) NOT NULL,

    typeId INT NOT NULL,
    FOREIGN KEY (typeId) REFERENCES ImageType(Id)
);

--CREATE TABLE UnitNormalizationRule (
--    Id INT IDENTITY(1,1) PRIMARY KEY,
--    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

--    fromUnitId INT NOT NULL,
--    toUnitId INT NOT NULL,
--    ratio FLOAT NOT NULL CHECK (ratio > 0),

--    FOREIGN KEY (fromUnitId) REFERENCES UnitType(Id),
--    FOREIGN KEY (toUnitId) REFERENCES UnitType(Id)
--);

------------------------------------------------------------
-- AUTHENTICATION SUB-DOMAIN
------------------------------------------------------------

CREATE TABLE UserAccount (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    email NVARCHAR(255) NOT NULL UNIQUE,
    username NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,

    createdAt DATETIME2 NOT NULL,
    lastLogin DATETIME2 NULL,
    displayName NVARCHAR(120) NULL,
    bio NVARCHAR(2000) NULL
);

CREATE TABLE AuthToken (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    userAccountId INT NOT NULL,
    token NVARCHAR(255) NOT NULL,
    expiry DATETIME2 NOT NULL,

    FOREIGN KEY (userAccountId) REFERENCES UserAccount(Id) ON DELETE CASCADE
);



------------------------------------------------------------
-- RECIPE SUB-DOMAIN
------------------------------------------------------------

-- INGREDIENT (belongs to recipe context)
CREATE TABLE Ingredient (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    name NVARCHAR(255) NOT NULL UNIQUE,
    category NVARCHAR(100) NULL,

    imageId INT NULL,
    FOREIGN KEY (imageId) REFERENCES Image(Id)
);

-- RECIPE AGGREGATE ROOT
CREATE TABLE Recipe (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX) NULL,

    difficulty INT NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
    prepTime INT NOT NULL,
    cookTime INT NOT NULL,
    servings INT NOT NULL,

    categoryId INT NOT NULL,
    sourceId INT NOT NULL,
    statusId INT NOT NULL,
    visibilityId INT NOT NULL,

    imageId INT NULL,
    createdById INT NULL,  
    reportedAmount INT NOT NULL DEFAULT 0,

    FOREIGN KEY (categoryId)   REFERENCES RecipeCategory(Id),
    FOREIGN KEY (sourceId)     REFERENCES RecipeSource(Id),
    FOREIGN KEY (statusId)     REFERENCES RecipeStatus(Id),
    FOREIGN KEY (visibilityId) REFERENCES RecipeVisibility(Id),
    FOREIGN KEY (imageId)      REFERENCES Image(Id),
    FOREIGN KEY (createdById)  REFERENCES UserAccount(Id)
);

-- RECIPE INSTRUCTIONS (1:N VO COLLECTION)
CREATE TABLE RecipeInstruction (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    recipeId INT NOT NULL,
    stepNumber INT NOT NULL,
    description NVARCHAR(2000) NOT NULL,

    FOREIGN KEY (recipeId) REFERENCES Recipe(Id) ON DELETE CASCADE
);

-- RECIPE INGREDIENTS (1:N VO COLLECTION)
CREATE TABLE RecipeIngredient (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    recipeId INT NOT NULL,
    ingredientId INT NOT NULL,
    quantity FLOAT NOT NULL CHECK (quantity > 0),
    unitTypeId INT NOT NULL,

    FOREIGN KEY (recipeId)     REFERENCES Recipe(Id) ON DELETE CASCADE,
    FOREIGN KEY (ingredientId) REFERENCES Ingredient(Id),
    FOREIGN KEY (unitTypeId)   REFERENCES UnitType(Id)
);

CREATE TABLE FavoriteRecipe (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    userAccountId INT NOT NULL,
    recipeId INT NOT NULL,
    favoritedAt DATETIME2 NOT NULL,

    FOREIGN KEY (userAccountId) REFERENCES UserAccount(Id) ON DELETE CASCADE,
    FOREIGN KEY (recipeId)      REFERENCES Recipe(Id)      ON DELETE CASCADE
);

------------------------------------------------------------
-- SHOPPING LIST SUB-DOMAIN
------------------------------------------------------------

CREATE TABLE ShoppingList (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    userAccountId INT NOT NULL,
    createdAt DATETIME2 NOT NULL,
    totalItems INT NOT NULL DEFAULT 0,

    FOREIGN KEY (userAccountId) REFERENCES UserAccount(Id) ON DELETE CASCADE
);

CREATE TABLE ShoppingListRecipeItem (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    shoppingListId INT NOT NULL,
    recipeId INT NOT NULL,

    FOREIGN KEY (shoppingListId) REFERENCES ShoppingList(Id) ON DELETE CASCADE,
    FOREIGN KEY (recipeId)      REFERENCES Recipe(Id)
);

CREATE TABLE ConsolidatedItem (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    identifier UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),

    shoppingListId INT NOT NULL,
    ingredientId INT NOT NULL,

    name NVARCHAR(255) NOT NULL,
    normalizedQuantity FLOAT NOT NULL,
    normalizedUnit NVARCHAR(50) NOT NULL,

    FOREIGN KEY (shoppingListId) REFERENCES ShoppingList(Id) ON DELETE CASCADE,
    FOREIGN KEY (ingredientId)   REFERENCES Ingredient(Id)
);
