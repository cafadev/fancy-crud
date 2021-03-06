��#   D j a n g o   p r o j e c t   t e m p l a t e  
  
 E s t a   e s   l a   p l a n t i l l a   e s t � n d a r   d e   u n   p r o y e c t o   e n   D j a n g o ,   l a   m i s m a   t i e n e   l a s   c o n f i g u r a c i o n e s   b � s i c a s   p a r a   a s e g u r a r   u n   d e p l o y   e n   u n   S h a r e d   H o s t .  
  
 P a r a   p o d e r   e j e c u t a r   c o r r e c t a m e n t e   e s t e   t e m p l a t e ,   a s e g � r e s e   d e   c r e a r   u n   e n t o r n o   v i r t u a l   c o n   l a   h e r r a m i e n t a   d e   s u   e l e c c i � n :   A n a c o n d a   N a v i g a t o r ,   V i r t u a l e n v   o   P y L e n v .   S e   r e c o m i e n d a   l a   v e r s i � n   3 . 8   d e   p y t h o n .  
  
 U n a   v e z   c r e a d o   y   a c t i v a d o   e l   e n t o r n o   v i r t u a l   i n s t a l e   t o d a s   l a s   d e p e n d e n c i a s   d e l   p r o y e c t o   e j e c u t a n d o  
  
 ` p i p   i n s t a l l   - r   r e q u i r e m e n t s ` .  
  
 #   C r e a r   e l   a r c h i v o   . e n v  
  
 E l   a r c h i v o   . e n v   d e b e r �   c o n t e n e r   l a s   v a r i a b l e s   d e   e n t o r n o   q u e   n e c e s i t a r �   e l   p r o y e c t o   p a r a   l a   c o r r e c t a   e j e c u c i � n   t a n t o   e n   u n   a m b i e n t e   d e   d e s a r r o l l o   a s �   c o m o   e n   p r o d u c c i � n ,   e s t e   a r c h i v o   d e b e   c o n t e n e r   l a s   s i g u i e n t e s   v a r i a b l e s :  
  
 # # # #   D E B U G  
  
 E s t e   v a l o r   d e b e   d e   s e r   ` T r u e `   c u a n d o   e l   p r o y e c t o   s e   e n c u e n t r a   e n   d e s a r r o l l o   l o c a l m e n t e ,   n o   o l v i d e   c a m b i a r   s u   v a l o r   a   ` F a l s e `   c u a n d o   e l   p r o y e c t o   v a y a   s e r   p u e s t o   e n   p r o d u c c i � n  
  
 # # # #   H O S T _ P A T H  
  
 E l   H O S T _ P A T H   e s   e l   s u b d i r e c t o r i o   d o n d e   s e   v a   e n c o n t r a r   a l m a c e n a d o   e l   p r o y e c t o   e n   e l   s e r v i d o r   d e   p r o d u c c i � n ,   p o r   e j e m p l o ,   s i   e l   p r o y e c t o   s e   e n c u e n t r a   a l m a c e n a d o   e n   e l   s u b d i r e c t o r i o   ` d j a n g o - p r o j e c t / d j a n g o - p r o j e c t ` ,   l a   d i r e c c i � n   d e l   m i s m o   s e   v e r �   d e   l a   s i g u i e n t e   m a n e r a   ` h t t p s : / / e x a m p l e . c o m / d j a n g o - p r o j e c t / d j a n g o - p r o j e c t ` .   p o r   e n d e   l a   v a r i a b l e   d e b e   s e r   ` H O S T _ P A T H = d j a n g o - p r o j e c t / d j a n g o - p r o j e c t ` .  
  
 O b s e r v e   q u e   e l   v a l o r   d e   l a   v a r i a b l e   N O   d e b e   c o n t e n e r   u n a   p l e c a   a l   p r i n c i p i o   n i   a l   f i n a l   d e   l a   m i s m a .  
  
 # # # #   H O S T _ U S E R  
  
 E s t a   v a r i a b l e   c o n t i e n e   e l   n o m b r e   d e   u s u a r i o   d e n t r o   d e   l a   c a r p e t a   ` / h o m e ` ,   e s t e   t a m b i � n   s u e l e   s e r   e l   n o m b r e   d e   u s u a r i o   c o n   e l   q u e   a c c e d e   a l   C P a n e l .  
  
 # # #   V a r i a b l e s   d e   c o n f i g u r a c i � n   d e   B a s e   d e   d a t o s  
  
 L a s   s i g u i e n t e s   v a r i a b l e s   s e   e n c a r g a n   d e   l a   c o n e x i � n   c o n   l a   b a s e   d e   d a t o s :  
  
 -   * * D A T A B A S E _ E N G I N E * * :   E s t e   e s   e l   m o t o r   d e   b a s e   d e   d a t o s   q u e   s e   u t i l i z a r a   e n   e l   p r o y e c t o .  
 -   * * D A T A B A S E _ N A M E * * :   E l   n o m b r e   d e   l a   b a s e   d e   d a t o s   a   u t i l i z a r  
 -   * * D A T A B A S E _ U S E R * * :   U s u a r i o   p a r a   a c c e d e r   a   l a   b a s e   d e   d a t o s  
 -   * * D A T A B A S E _ H O S T * * :   H o s t   d o n d e   s e   e n c u e n t r a   l a   b a s e   d e   d a t o s ,   p o r   l o   g e n e r a l   e s   l o c a l h o s t  
 -   * * D A T A B A S E _ P O R T * * :   P u e r t o   d e   a c c e s o   a   l a   b a s e   d e   d a t o s ,   u s u a l m e n t e   3 3 0 6  
  
 # # #   C O R S _ A L L O W E D _ O R I G I N S  
  
 E n   e s t a   v a r i a b l e   d e   e n t o r n o   s e   e s p e c i f i c a n   l o s   d o m i n i o s   o   s i t i o s   q u e   p o d r � n   t e n e r   a c c e s o   a l   A P I ,   s i   o   s i   d e b e   i n c l u i r   e l   d o m i n i o   d e l   s i t i o   d o n d e   v a   e s t a r   a l m a c e n a d o   n u e s t r o   p r o y e c t o  
  
 a l   f i n a l i z a r   l a   d e c l a r a c i � n   e l   a r c h i v o   d e b e r � a   s e r   s i m i l a r   a :  
  
 ` D E B U G = T r u e `  
  
 ` H O S T _ P A T H = `  
  
 ` H O S T _ U S E R = `  
  
 ` D A T A B A S E _ E N G I N E = d j a n g o . d b . b a c k e n d s . m y s q l `  
  
 ` D A T A B A S E _ N A M E = d j a n g o `  
  
 ` D A T A B A S E _ U S E R = r o o t `  
  
 ` D A T A B A S E _ H O S T = l o c a l h o s t `  
  
 ` D A T A B A S E _ P O R T = 3 3 0 6 `  
  
 ` C O R S _ A L L O W E D _ O R I G I N S = h t t p s : / / < d o m a i n > `  
  
 N o   o l v i d e   q u e   l a s   v a r i a b l e s   d e n t r o   d e l   a r c h i v o   . e n v   c a m b i a r a n   s e g � n   e l   a m b i e n t e   d o n d e   s e   e n c u e n t r e   e l   p r o y e c t o   ( d e s a r r o l l o   o   e n   p r o d u c c i � n ) .  
 