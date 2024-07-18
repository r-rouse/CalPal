--
-- PostgreSQL database dump
--

-- Dumped from database version 14.11 (Homebrew)
-- Dumped by pg_dump version 14.11 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Foods; Type: TABLE; Schema: public; Owner: randallrouse
--

CREATE TABLE public."Foods" (
    id integer NOT NULL,
    name character varying(255),
    "caloriesPerGram" integer,
    carbs integer,
    protein integer,
    sugar integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Foods" OWNER TO randallrouse;

--
-- Name: Foods_id_seq; Type: SEQUENCE; Schema: public; Owner: randallrouse
--

CREATE SEQUENCE public."Foods_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Foods_id_seq" OWNER TO randallrouse;

--
-- Name: Foods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: randallrouse
--

ALTER SEQUENCE public."Foods_id_seq" OWNED BY public."Foods".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: randallrouse
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO randallrouse;

--
-- Name: foods; Type: TABLE; Schema: public; Owner: randallrouse
--

CREATE TABLE public.foods (
    id integer NOT NULL,
    name character varying(255),
    "caloriesPerGram" integer,
    carbs integer,
    protein integer,
    sugar integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.foods OWNER TO randallrouse;

--
-- Name: foods_id_seq; Type: SEQUENCE; Schema: public; Owner: randallrouse
--

CREATE SEQUENCE public.foods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.foods_id_seq OWNER TO randallrouse;

--
-- Name: foods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: randallrouse
--

ALTER SEQUENCE public.foods_id_seq OWNED BY public.foods.id;


--
-- Name: meals; Type: TABLE; Schema: public; Owner: randallrouse
--

CREATE TABLE public.meals (
    id integer NOT NULL,
    name character varying(255),
    ingredients character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.meals OWNER TO randallrouse;

--
-- Name: meals_id_seq; Type: SEQUENCE; Schema: public; Owner: randallrouse
--

CREATE SEQUENCE public.meals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.meals_id_seq OWNER TO randallrouse;

--
-- Name: meals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: randallrouse
--

ALTER SEQUENCE public.meals_id_seq OWNED BY public.meals.id;


--
-- Name: Foods id; Type: DEFAULT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public."Foods" ALTER COLUMN id SET DEFAULT nextval('public."Foods_id_seq"'::regclass);


--
-- Name: foods id; Type: DEFAULT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public.foods ALTER COLUMN id SET DEFAULT nextval('public.foods_id_seq'::regclass);


--
-- Name: meals id; Type: DEFAULT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public.meals ALTER COLUMN id SET DEFAULT nextval('public.meals_id_seq'::regclass);


--
-- Data for Name: Foods; Type: TABLE DATA; Schema: public; Owner: randallrouse
--

COPY public."Foods" (id, name, "caloriesPerGram", carbs, protein, sugar, "createdAt", "updatedAt") FROM stdin;
1	potato	1	0	0	0	2023-02-20 18:12:33.543-05	2023-02-20 18:12:33.543-05
2	potato	1	0	0	0	2023-02-20 21:59:31.235-05	2023-02-20 21:59:31.235-05
3	potato	1	0	0	0	2023-02-20 21:59:31.284-05	2023-02-20 21:59:31.284-05
4	potato	1	0	0	0	2023-02-20 22:00:02.148-05	2023-02-20 22:00:02.148-05
5	potato	1	0	0	0	2023-02-26 19:08:54.885-05	2023-02-26 19:08:54.885-05
6	potato	1	0	0	0	2023-02-26 19:09:23.707-05	2023-02-26 19:09:23.707-05
7	potato	1	0	0	0	2023-02-26 19:24:46.056-05	2023-02-26 19:24:46.056-05
8	potato	1	0	0	0	2023-02-26 19:25:31.04-05	2023-02-26 19:25:31.04-05
9	potato	1	0	0	0	2023-02-26 19:27:14.774-05	2023-02-26 19:27:14.774-05
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: randallrouse
--

COPY public."SequelizeMeta" (name) FROM stdin;
20230220225649-create-foods.js
20230220233559-create-foods.js
20230227002705-create-meal.js
\.


--
-- Data for Name: foods; Type: TABLE DATA; Schema: public; Owner: randallrouse
--

COPY public.foods (id, name, "caloriesPerGram", carbs, protein, sugar, "createdAt", "updatedAt") FROM stdin;
7	carrot	40	\N	\N	\N	2023-02-21 22:26:11.052-05	2023-02-21 22:26:11.052-05
8	bell pepper	26	\N	\N	\N	2023-02-21 22:26:32.011-05	2023-02-21 22:26:32.011-05
9	garlic	149	\N	\N	\N	2023-02-21 22:26:50.534-05	2023-02-21 22:26:50.534-05
10	onion	42	\N	\N	\N	2023-02-21 22:27:04.563-05	2023-02-21 22:27:04.563-05
2	olive oil	900	3	2	1	2023-02-20 22:15:35.548-05	2023-02-22 18:34:32.74-05
11	brussel sprouts	43	\N	\N	\N	2023-02-22 18:35:19.812-05	2023-02-22 18:35:19.812-05
12	bananas	89	\N	\N	\N	2023-02-22 18:35:41.881-05	2023-02-22 18:35:41.881-05
15	sweet potato	86	\N	\N	\N	2023-02-23 13:55:34.096-05	2023-02-23 13:55:34.096-05
16	broccoli	34	\N	\N	\N	2023-02-23 13:56:35.56-05	2023-02-23 13:56:35.56-05
4	chicken	200	\N	\N	\N	2023-02-21 22:25:21.852-05	2023-02-23 14:01:26.798-05
5	bacon	320	\N	\N	\N	2023-02-21 22:25:37.913-05	2023-02-23 14:01:52.258-05
6	asparagus	20	\N	\N	\N	2023-02-21 22:25:58.332-05	2023-02-23 14:03:29.308-05
3	rice	129	79	2	1	2023-02-21 21:32:34.814-05	2023-02-23 14:19:58.812-05
17	egg	52	\N	\N	\N	2023-02-23 18:43:00.382-05	2023-02-23 18:43:00.382-05
13	wine	353	\N	\N	\N	2023-02-22 20:27:22.093-05	2023-02-25 21:00:17.616-05
26	potato	1	0	0	0	2023-02-26 19:27:14.824-05	2023-02-26 19:27:14.824-05
27	flour	100	\N	\N	\N	2023-04-19 12:42:26.374-04	2023-04-19 12:42:26.374-04
\.


--
-- Data for Name: meals; Type: TABLE DATA; Schema: public; Owner: randallrouse
--

COPY public.meals (id, name, ingredients, "createdAt", "updatedAt") FROM stdin;
1	rice and beans	{rice,beans}	2023-02-26 19:27:14.871-05	2023-02-26 19:27:14.871-05
\.


--
-- Name: Foods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: randallrouse
--

SELECT pg_catalog.setval('public."Foods_id_seq"', 9, true);


--
-- Name: foods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: randallrouse
--

SELECT pg_catalog.setval('public.foods_id_seq', 27, true);


--
-- Name: meals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: randallrouse
--

SELECT pg_catalog.setval('public.meals_id_seq', 1, true);


--
-- Name: Foods Foods_pkey; Type: CONSTRAINT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public."Foods"
    ADD CONSTRAINT "Foods_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: foods foods_pkey; Type: CONSTRAINT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public.foods
    ADD CONSTRAINT foods_pkey PRIMARY KEY (id);


--
-- Name: meals meals_pkey; Type: CONSTRAINT; Schema: public; Owner: randallrouse
--

ALTER TABLE ONLY public.meals
    ADD CONSTRAINT meals_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

