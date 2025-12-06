------------------------------------------------------------
-- SEED REICPE DATA
------------------------------------------------------------
USE ThymeSave;
GO
-- ------------------------------------------------------------
-- -- IMAGES (used by ingredients + recipes)
-- ------------------------------------------------------------
-- INSERT INTO Image (image, altText, typeId)
-- VALUES
-- ('img/ingredients/tomato.png', 'Fresh tomato', 2),
-- ('img/ingredients/onion.png', 'Yellow onion', 2),
-- ('img/ingredients/garlic.png', 'Garlic cloves', 2),
-- ('img/ingredients/chickenbreast.png', 'Chicken breast', 2),
-- ('img/ingredients/oliveoil.png', 'Olive oil bottle', 2),
-- ('img/ingredients/salt.png', 'Salt', 2),
-- ('img/ingredients/pepper.png', 'Black pepper', 2),
-- ('img/ingredients/spaghetti.png', 'Spaghetti noodles', 2),
-- ('img/ingredients/basil.png', 'Fresh basil leaves', 2),
-- ('img/ingredients/groundbeef.png', 'Ground beef', 2),
-- ('img/ingredients/egg.png', 'Egg', 2),
-- ('img/ingredients/flour.png', 'Flour', 2),
-- ('img/ingredients/milk.png', 'Milk', 2),
-- ('img/ingredients/butter.png', 'Butter', 2),
-- ('img/ingredients/rice.png', 'Rice', 2),
-- ('img/ingredients/soy.png', 'Soy sauce', 2),
-- ('img/ingredients/honey.png', 'Honey', 2),
-- ('img/ingredients/lemon.png', 'Lemon', 2),
-- ('img/ingredients/ginger.png', 'Ginger root', 2),
-- ('img/ingredients/chili.png', 'Red chili pepper', 2),
-- ('img/ingredients/parsley.png', 'Parsley', 2),
-- ('img/ingredients/potato.png', 'Russet potato', 2),
-- ('img/ingredients/carrots.png', 'Carrots', 2),
-- ('img/ingredients/broth.png', 'Chicken broth', 2),
-- ('img/ingredients/tortilla.png', 'Wheat tortillas', 2),
-- ('img/ingredients/cheddar.png', 'Cheddar cheese', 2),
-- ('img/ingredients/cream.png', 'Heavy cream', 2),
-- ('img/ingredients/mushroom.png', 'White mushrooms', 2),
-- ('img/ingredients/bacon.png', 'Bacon strips', 2),
-- ('img/ingredients/tuna.png', 'Canned tuna', 2);

------------------------------------------------------------
-- INGREDIENTS (30+ items)
------------------------------------------------------------
INSERT INTO Ingredient (name, category)--, imageId)
VALUES
('Tomato', 'Vegetable'),--, 1),
('Onion', 'Vegetable'),--, 2),
('Garlic', 'Vegetable'),--, 3),
('Chicken Breast', 'Meat'),--, 4),
('Olive Oil', 'Oil'),--, 5),
('Salt', 'Spice'),--, 6),
('Black Pepper', 'Spice'),--, 7),
('Spaghetti', 'Pasta'),--, 8),
('Fresh Basil', 'Herb'),--, 9),
('Ground Beef', 'Meat'),--, 10),
('Egg', 'Dairy'),--, 11),
('Flour', 'Baking'),--, 12),
('Milk', 'Dairy'),--, 13),
('Butter', 'Dairy'),--, 14),
('Rice', 'Grain'),--, 15),
('Soy Sauce', 'Condiment'),--, 16),
('Honey', 'Condiment'),--, 17),
('Lemon', 'Fruit'),--, 18),
('Ginger', 'Spice'),--, 19),
('Red Chili Pepper', 'Vegetable'),--, 20),
('Parsley', 'Herb'),--, 21),
('Potato', 'Vegetable'),--, 22),
('Carrot', 'Vegetable'),--, 23),
('Chicken Broth', 'Liquid'),--, 24),
('Tortilla', 'Bakery'),--, 25),
('Cheddar Cheese', 'Dairy'),--, 26),
('Heavy Cream', 'Dairy'),--, 27),
('Mushroom', 'Vegetable'),--, 28),
('Bacon', 'Meat'),--, 29),
('Tuna (Canned)', 'Seafood');--, 30);

------------------------------------------------------------
-- RECIPE IMAGES (typeId = 1 for RECIPE)
------------------------------------------------------------
-- INSERT INTO Image (image, altText, typeId)
-- VALUES
-- ('img/recipes/spaghetti_bolognese.jpg', 'Spaghetti Bolognese', 1),
-- ('img/recipes/lemon_chicken.jpg', 'Lemon Chicken', 1),
-- ('img/recipes/creamy_mushroom_pasta.jpg', 'Creamy Mushroom Pasta', 1);

------------------------------------------------------------
-- RECIPES
-- NOTE: Use existing FK IDs for Category, Source, Status, Visibility.
-- EXAMPLE:
-- RecipeCategory: OTHER = 7
-- RecipeSource: OFFICIAL = 1
-- RecipeStatus: ACTIVE = 1
-- RecipeVisibility: PUBLIC = 1
------------------------------------------------------------

-- 1. Spaghetti Bolognese
INSERT INTO Recipe
(name, description, difficulty, prepTime, cookTime, servings, categoryId, sourceId, statusId, visibilityId, createdById)
VALUES
('Spaghetti Bolognese', 
 'Classic Italian pasta with beef and tomato sauce.', 
 2, 15, 30, 4, 
 7, -- OTHER
 1, -- OFFICIAL
 1, -- ACTIVE
 1, -- PUBLIC
 NULL);

-- 2. Lemon Garlic Chicken
INSERT INTO Recipe
(name, description, difficulty, prepTime, cookTime, servings, categoryId, sourceId, statusId, visibilityId, createdById)
VALUES
('Lemon Garlic Chicken',
 'Pan-seared chicken with lemon, garlic, and herbs.',
 3, 10, 20, 3,
 7, 1, 1, 1,
 NULL);

-- 3. Creamy Mushroom Pasta
INSERT INTO Recipe
(name, description, difficulty, prepTime, cookTime, servings, categoryId, sourceId, statusId, visibilityId, createdById)
VALUES
('Creamy Mushroom Pasta',
 'Rich cream sauce with sautéed mushrooms and parmesan.',
 2, 10, 15, 2,
 7, 1, 1, 1,
 NULL);

------------------------------------------------------------
-- RECIPE INSTRUCTIONS
------------------------------------------------------------

-- Spaghetti Bolognese (RecipeId = 1)
INSERT INTO RecipeInstruction (recipeId, stepNumber, description)
VALUES
(1, 1, 'Boil spaghetti according to package directions.'),
(1, 2, 'Sauté onions and garlic in olive oil.'),
(1, 3, 'Add ground beef and cook until browned.'),
(1, 4, 'Add tomatoes, salt, and pepper; simmer 15 minutes.'),
(1, 5, 'Combine sauce with pasta and garnish with basil.');

-- Lemon Garlic Chicken (RecipeId = 2)
INSERT INTO RecipeInstruction (recipeId, stepNumber, description)
VALUES
(2, 1, 'Season chicken with salt and pepper.'),
(2, 2, 'Sear chicken in olive oil until golden.'),
(2, 3, 'Add garlic, lemon juice, and chicken broth.'),
(2, 4, 'Simmer until chicken is cooked through.'),
(2, 5, 'Serve with parsley.');

-- Creamy Mushroom Pasta (RecipeId = 3)
INSERT INTO RecipeInstruction (recipeId, stepNumber, description)
VALUES
(3, 1, 'Cook pasta until al dente.'),
(3, 2, 'Sauté mushrooms in butter.'),
(3, 3, 'Add cream, salt, and pepper.'),
(3, 4, 'Toss pasta with sauce.'),
(3, 5, 'Top with parsley.');

------------------------------------------------------------
-- RECIPE INGREDIENTS (quantities + unit types)
------------------------------------------------------------

-- Spaghetti Bolognese
INSERT INTO RecipeIngredient (recipeId, ingredientId, quantity, unitTypeId)
VALUES
(1, 8, 400, 1),   -- Spaghetti, GRAM
(1, 2, 1, 8),     -- Onion, UNIT
(1, 3, 2, 8),     -- Garlic cloves, UNIT
(1, 10, 300, 1),  -- Ground beef, GRAM
(1, 1, 2, 8),     -- Tomatoes, UNIT
(1, 6, 1, 8),     -- Salt
(1, 7, 1, 8),     -- Pepper
(1, 5, 2, 8);     -- Olive oil tablespoons

-- Lemon Garlic Chicken
INSERT INTO RecipeIngredient (recipeId, ingredientId, quantity, unitTypeId)
VALUES
(2, 4, 2, 8),  -- Chicken breast, UNIT
(2, 3, 3, 8),  -- Garlic, UNIT
(2, 18, 1, 8), -- Lemon, UNIT
(2, 5, 2, 8),  -- Olive oil, UNIT/TBSP
(2, 21, 1, 8); -- Parsley, UNIT

-- Creamy Mushroom Pasta
INSERT INTO RecipeIngredient (recipeId, ingredientId, quantity, unitTypeId)
VALUES
(3, 28, 200, 1), -- Mushrooms (grams)
(3, 14, 1, 8),   -- Butter (tablespoon)
(3, 27, 200, 3), -- Heavy cream (milliliters)
(3, 6, 1, 8),    -- Salt
(3, 7, 1, 8);    -- Pepper
