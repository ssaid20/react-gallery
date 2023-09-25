CREATE TABLE "gallery_items" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "likes" INT DEFAULT 0
);

INSERT INTO "gallery_items" ("path", "description") VALUES 
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');