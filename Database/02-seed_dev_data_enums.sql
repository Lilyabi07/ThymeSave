------------------------------------------------------------
-- SEED ENUM DATA
------------------------------------------------------------
USE ThymeSave;
GO
-- RecipeSource
INSERT INTO RecipeSource (name) VALUES
('OFFICIAL'),
('USER_SUBMITTED');

-- RecipeVisibility
INSERT INTO RecipeVisibility (name) VALUES
('PUBLIC'),
('PRIVATE');

-- RecipeStatus
INSERT INTO RecipeStatus (name) VALUES
('ACTIVE'),
('INACTIVE'),
('HIDDEN'),
('REMOVED');

-- RecipeCategory
INSERT INTO RecipeCategory (name) VALUES
('VEGAN'),
('VEGETARIAN'),
('KETO'),
('GLUTEN_FREE'),
('DAIRY_FREE'),
('PALEO'),
('OTHER');

-- UnitType
INSERT INTO UnitType (name) VALUES
('GRAM'),
('KILOGRAM'),
('LITER'),
('MILLILITER'),
('CUP'),
('TEASPOON'),
('TABLESPOON'),
('UNIT');

-- ImageType
INSERT INTO ImageType (name) VALUES
('RECIPE'),
('INGREDIENT'),
('USER_PROFILE');
