CREATE TABLE IF NOT EXISTS "equipment" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "exerciseDetails" (
	"id" serial PRIMARY KEY NOT NULL,
	"workoutId" integer,
	"exerciseId" integer,
	"sets" integer NOT NULL,
	"reps" integer NOT NULL,
	"weight" double precision NOT NULL,
	"distance" double precision NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "exercises" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"equipmentId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "muscleGroups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" integer NOT NULL,
	"recoveryPercentage" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"sex" text NOT NULL,
	"weight" double precision NOT NULL,
	"height" double precision NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "workouts" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"date" date NOT NULL,
	"duration" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exerciseDetails" ADD CONSTRAINT "exerciseDetails_workoutId_workouts_id_fk" FOREIGN KEY ("workoutId") REFERENCES "workouts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exerciseDetails" ADD CONSTRAINT "exerciseDetails_exerciseId_exercises_id_fk" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exercises" ADD CONSTRAINT "exercises_equipmentId_equipment_id_fk" FOREIGN KEY ("equipmentId") REFERENCES "equipment"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workouts" ADD CONSTRAINT "workouts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
