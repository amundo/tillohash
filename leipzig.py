import json

labels = u"""
1	first person
2	second person
3	third person
A	agent-like argument of canonical transitive verb
ABL	ablative
ABS	absolutive
ACC	accusative
ADJ	adjective
ADV	adverb(ial)
AGR	agreement
ALL	allative
ANTIP	antipassive
APPL	applicative
ART	article
AUX	auxiliary
BEN	benefactive
CAUS	causative
CLF	classifier
COM	comitative
COMP	complementizer
COMPL	completive
COND	conditional
COP	copula
CVB	converb
DAT	dative
DECL	declarative
DEF	definite
DEM	demonstrative
DET	determiner
DIST	distal
DISTR	distributive
DU	dual
DUR	durative
ERG	ergative
EXCL	exclusive
F	feminine
FOC	focus
FUT	future
GEN	genitive
IMP	imperative
INCL	inclusive
IND	indicative
INDF	indefinite
INF	infinitive
INS	instrumental
INTR	intransitive
IPFV	imperfective
IRR	irrealis
LOC	locative
M	masculine
N	neuter
N-	non- (e.g. NSG nonsingular, NPST nonpast)
NEG	negation, negative
NMLZ	nominalizer/nominalization
NOM	nominative
OBJ	object
OBL	oblique
P	patient-like argument of canonical transitive verb
PASS	passive
PFV	perfective
PL	plural
POSS	possessive
PRED	predicative
PRF	perfect
PRS	present
PROG	progressive
PROH	prohibitive
PROX	proximal/proximate
PST	past
PTCP	participle
PURP	purposive
Q	question particle/marker
QUOT	quotative
RECP	reciprocal
REFL	reflexive
REL	relative
RES	resultative
S	single argument of canonical intransitive verb
SBJ	subject
SBJV	subjunctive
SG	singular
TOP	topic
TR	transitive
VOC	vocative
""".strip().splitlines()

abbreviations = {}

for line in labels:
  abbr, expansion = line.split()[0], " ".join(line.split()[1:])
  abbreviations[abbr] = expansion

print json.dumps(abbreviations)
