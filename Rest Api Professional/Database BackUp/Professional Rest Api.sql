PGDMP     ,    2                {            Professional_Rest_Apis    14.4    14.4     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    99310    Professional_Rest_Apis    DATABASE     |   CREATE DATABASE "Professional_Rest_Apis" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
 (   DROP DATABASE "Professional_Rest_Apis";
                postgres    false            ?            1259    99311    product    TABLE     \   CREATE TABLE public.product (
    "Id" integer NOT NULL,
    "Product" character varying
);
    DROP TABLE public.product;
       public         heap    postgres    false            ?            1259    99316    product_Id_seq    SEQUENCE     ?   ALTER TABLE public.product ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."product_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    209            ?            1259    99336    users    TABLE     ?   CREATE TABLE public.users (
    "Id" integer NOT NULL,
    "Name" character varying,
    "Email" character varying NOT NULL,
    "Password" character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    99335    users1_Id_seq    SEQUENCE     ?   ALTER TABLE public.users ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."users1_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            ?          0    99311    product 
   TABLE DATA           2   COPY public.product ("Id", "Product") FROM stdin;
    public          postgres    false    209   ?       ?          0    99336    users 
   TABLE DATA           B   COPY public.users ("Id", "Name", "Email", "Password") FROM stdin;
    public          postgres    false    212   ?       ?           0    0    product_Id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."product_Id_seq"', 4, true);
          public          postgres    false    210            ?           0    0    users1_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."users1_Id_seq"', 8, true);
          public          postgres    false    211            b           2606    99324    product product_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    209            d           2606    99342    users users1_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users1_pkey PRIMARY KEY ("Id");
 ;   ALTER TABLE ONLY public.users DROP CONSTRAINT users1_pkey;
       public            postgres    false    212            ?      x?3?L?,N.?,)?????? *1V      ?   ?   x?e̹?0  Й~sU(?4???3???e)???71n.o|Xb[??d???n?kZ??B?Q&???e?`FH?}?ْ!9??R??1???s????tf?J??????????{???nI/g?1iq?>??m?^??N?i<??"?\?????9?? >??7?     