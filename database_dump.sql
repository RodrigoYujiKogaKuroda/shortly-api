PGDMP     ,    1                z            shortly_4u67    15.1    15.1 $    d           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            e           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            f           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            g           1262    16389    shortly_4u67    DATABASE     w   CREATE DATABASE shortly_4u67 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF8';
    DROP DATABASE shortly_4u67;
                rykk    false            h           0    0    shortly_4u67    DATABASE PROPERTIES     5   ALTER DATABASE shortly_4u67 SET "TimeZone" TO 'utc';
                     rykk    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                rykk    false            �            1259    16442    links    TABLE     �   CREATE TABLE public.links (
    id integer NOT NULL,
    short_url text NOT NULL,
    url text NOT NULL,
    visit_count integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.links;
       public         heap    rykk    false    5            �            1259    16441    links_id_seq    SEQUENCE     �   CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.links_id_seq;
       public          rykk    false    5    219            i           0    0    links_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;
          public          rykk    false    218            �            1259    16426    sessions    TABLE     �   CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    rykk    false    5            �            1259    16425    sessions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sessions_id_seq;
       public          rykk    false    217    5            j           0    0    sessions_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;
          public          rykk    false    216            �            1259    16398    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.users;
       public         heap    rykk    false    5            �            1259    16397    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          rykk    false    215    5            k           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          rykk    false    214            �           2604    16445    links id    DEFAULT     d   ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);
 7   ALTER TABLE public.links ALTER COLUMN id DROP DEFAULT;
       public          rykk    false    218    219    219            �           2604    16429    sessions id    DEFAULT     j   ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
 :   ALTER TABLE public.sessions ALTER COLUMN id DROP DEFAULT;
       public          rykk    false    216    217    217            �           2604    16401    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          rykk    false    215    214    215            a          0    16442    links 
   TABLE DATA           U   COPY public.links (id, short_url, url, visit_count, user_id, created_at) FROM stdin;
    public          rykk    false    219   %       _          0    16426    sessions 
   TABLE DATA           B   COPY public.sessions (id, token, user_id, created_at) FROM stdin;
    public          rykk    false    217   �%       ]          0    16398    users 
   TABLE DATA           F   COPY public.users (id, name, email, password, created_at) FROM stdin;
    public          rykk    false    215   �%       l           0    0    links_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.links_id_seq', 5, true);
          public          rykk    false    218            m           0    0    sessions_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.sessions_id_seq', 4, true);
          public          rykk    false    216            n           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          rykk    false    214            �           2606    16450    links links_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.links DROP CONSTRAINT links_pkey;
       public            rykk    false    219            �           2606    16452    links links_short_url_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_short_url_key UNIQUE (short_url);
 C   ALTER TABLE ONLY public.links DROP CONSTRAINT links_short_url_key;
       public            rykk    false    219            �           2606    16433    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            rykk    false    217            �           2606    16435    sessions sessions_token_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);
 E   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_token_key;
       public            rykk    false    217            �           2606    16407    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            rykk    false    215            �           2606    16405    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            rykk    false    215            �           2606    16453    links links_user_id_fkey 
   FK CONSTRAINT     w   ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.links DROP CONSTRAINT links_user_id_fkey;
       public          rykk    false    3011    219    215            �           2606    16436    sessions sessions_user_id_fkey 
   FK CONSTRAINT     }   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 H   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_user_id_fkey;
       public          rykk    false    215    3011    217            �           826    16391     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     L   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES  TO rykk;
                   postgres    false                        826    16393    DEFAULT PRIVILEGES FOR TYPES    DEFAULT ACL     H   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES  TO rykk;
                   postgres    false            �           826    16392     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     L   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS  TO rykk;
                   postgres    false            �           826    16390    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     I   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO rykk;
                   postgres    false            a   U   x�3��w�p�p���())(���OJ�K�M)JM��K*-������*�4�4�4202�54�52V00�2��20�3�4722����� s��      _   H   x���� ��T�p�5ZK>������(ɛ����0��W�L����y,P�� u(x��f�E� {����i��      ]   �   x�3��N,.��TɯL�M�����R�2���s��
8U��T
T*J*�"�,=�R3�sr��<��KS3��-�ʍ�\ܪBJ�˼+�\��-<-ss�r29���t
�t�������LMML�L�b���� Cf'�     