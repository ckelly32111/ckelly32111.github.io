#CIS 122
#Chase Kelly
#Project 2
#Collection of Unit measurement conversions

def c_to_f(c):
    '''
    Celsius to Farenheit Converter
    '''
    f = c * 9/5 + 32
    return f
#end def

def f_to_c(f):
    '''
    Farenheit to Celsius Converter
    '''
    c = (f-32) * 5/9
    return c
#end def

def f_to_m(f):
    '''
    Feet to Meter Converter
    '''
    m = f/3.2808399
    return m
#end def

def m_to_f(m):
    '''
    Meter to Feet Converter
    '''
    f = m * 3.2808399
    return f
#end def

def f_to_k(f):
    '''
    Farenheit to Kelvin Converter
    '''
    c = f_to_c(f)
    k = c + 273.15
    return k
#end def

def sq_feet_to_sq_meters(sqf):
    '''
    Sq Feet to Sq Meter Converter
    '''
    sqm = sqf * 0.092903
    return sqm
#end def

def sq_meters_to_sq_feet(sqm):
    '''
    Sq Meter to Sq Feet Converter
    '''
    sqf = sqm/0.092903
    return sqf
#end def

def sq_feet_to_acres(sqf):
    '''
    Sq Feet to Acre Converter
    '''
    acres = sqf * 0.000029568
    return acres
#end def

def sq_meters_to_acres(sqm):
    '''
    Sq Meters to Acre Converter
    '''
    acres = sqm * .000247105
    return acres
#end def

def acres_to_sq_feet(acres):
    '''
    Acres to Square Feet Converter
    '''
    sqf = acres / 0.000029568
    return sqf
#end def

def acres_to_sq_meters(acres):
    '''
    Acres to Sq Meters Converter
    '''
    sqm = acres / 0.000247105
    return sqm
#end def

print("Enter your choice")
print("1. Celsius to Farenheit")
print("2. Feet to Meters")
print("3. Farenheit to Kelvin")
print("4. Farenheit to Celsius")
print("5. Meters to Feet")
print("6. Square Feet to Square Meters")
print("7. Square Meters to Square Feet")
print("8. Sqaure Feet to Acres")
print("9. Square Meters to Acres")
print("10. Acres to Square Feet")
print("11. Acres to Square Meters")
for i in range(5000):
    choice = input('Enter your choice: ')
    if choice == '1':
        c = input('Enter temperature in C: ')
        c = int(c)
        c = round(c)
        c_float = float(c)
        f = c_to_f(c_float)
        print('Equivalent F temp:',f)
    elif choice == '2':
        f = input('Enter distance in feet: ')
        f = int(f)
        f= round(f)
        f_float = float(f)
        m = f_to_m(f_float)
        print('Equivalent distance in meters:',m)
    elif choice == '3':
        f = input('Enter temperature in f: ')
        f = int(f)
        f = round(f)
        f_float = float(f)
        k = f_to_k(f_float)
        print('Equivalent k temp:',k)
    elif choice == '4':
        f = input('Enter temperature in f: ')
        f = int(f)
        f = round(f)
        f_float = float(f)
        c = f_to_c(f_float)
        print('Equivalent c temp:',c)
    elif choice == '5':
        m = input('Enter distance in meters: ')
        m = int(m)
        m = round(m)
        m_float = float(m)
        f = m_to_f(m_float)
        print('Equivalent distance in feet:',f)
    elif choice == '6':
        sqf = input('Enter distance in square feet: ')
        sqf = int(sqf)
        sqf = round(sqf)
        sqf_float = float(sqf)
        sqm = sq_feet_to_sq_meters(sqf_float)
        print('Equivalent distance in square meters:',sqm)
    elif choice == '7':
        sqm = input('Enter distance in square meters: ')
        sqm = int(sqm)
        sqm = round(sqm)
        sqm_float = float(sqm)
        sqf = sq_meters_to_sq_feet(sqm_float)
        print('Equivalent distance in square feet:',sqf)
    elif choice == '8':
        sqf = input('Enter distance in square feet: ')
        sqf = int(sqf)
        sqf = round(sqf)
        sqf_float = float(sqf)
        acres = sq_feet_to_acres(sqf_float)
        print('Equivalent distance in acres:',acres)
    elif choice == '9':
        sqm = input('Enter distance in square meters: ')
        sqm = int(sqm)
        sqm = round(sqm)
        sqm_float = float(sqm)
        acres = sq_feet_to_acres(sqm_float)
        print('Equivalent distance in acres:',acres)
    elif choice == '10':
        acres = input('Enter distance in Acres: ')
        acres = int(acres)
        acres = round(acres)
        acres_float = float(acres)
        sqf = acres_to_sq_feet(acres_float)
        print('Equivalent distnace in Sq Feet:',sqf)
    elif choice == '11':
        acres = input('Enter distance in Acres: ')
        acres = int(acres)
        acres = round(acres)
        acres_float = float(acres)
        sqm = acres_to_sq_meters(acres_float)
        print('Equivalent distnace in Sq Meters:',sqm)
    choice = input('Do you wanna try again? (y/n): ')
    if choice == 'n':
        break
#end for
    
    
