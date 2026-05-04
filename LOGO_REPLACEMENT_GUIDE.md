# Logo Replacement Guide

## Current Logo

Your website now includes a professional SVG logo that:
- ✅ Displays instantly (no external files)
- ✅ Scales perfectly on all devices
- ✅ Matches your brand colors (Navy & Blue)
- ✅ Professional appearance
- ✅ Easy to customize

---

## How to Replace the Logo in the Future

### Option 1: Replace SVG Logo (Recommended - Current Setup)

If you want to keep the SVG logo but change the design:

1. **Open `index.html` in a text editor**
2. **Find this section** (around line 18):
   ```html
   <div class="logo">
       <svg class="logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
           <!-- SVG content here -->
       </svg>
       <span>DigiBrand Booster</span>
   </div>
   ```

3. **Replace the SVG code** with your own SVG
4. **Update cases.html** the same way (same code)
5. **Test** to make sure it looks good

### Option 2: Replace with Image Logo

If you want to use a PNG, JPG, or other image:

1. **Save your logo image** to the same folder as your HTML files
2. **Replace the SVG code** in both files with:
   ```html
   <div class="logo">
       <img src="your-logo.png" alt="DigiBrand Booster" class="logo-img">
       <span>DigiBrand Booster</span>
   </div>
   ```

3. **Update `styles.css`** - Add this CSS:
   ```css
   .logo-img {
       height: 44px;
       width: auto;
       display: block;
   }
   ```

4. **Update cases.html** the same way

### Option 3: Text Logo Only

If you want just text (no icon):

1. **Replace the SVG section** in both files with:
   ```html
   <div class="logo">
       <span>DigiBrand Booster</span>
   </div>
   ```

2. **Current CSS already supports this** - no changes needed

---

## Files to Edit

When replacing logo, update **both**:
- ✅ `index.html` - Home page (around line 18)
- ✅ `cases.html` - Case studies page (around line 18)

**Important:** Keep both files consistent with the same logo

---

## Logo Design Tips

### For Professional Appearance
- ✅ Use your brand colors (Navy #0F2E4D, Blue #0066CC)
- ✅ Keep it simple and recognizable
- ✅ Ensure it's readable at small sizes
- ✅ High contrast for visibility
- ✅ Works on both light and dark backgrounds

### Logo Size
- Currently set to: **44px × 44px**
- Adjust `.logo-svg` width/height in CSS if needed
- Scale proportionally on all devices

### For SVG Logos
- Use viewBox="0 0 48 48" for consistency
- Keep file size small
- Use simple shapes for faster rendering

### For Image Logos
- Use PNG with transparency (preferred)
- Minimum 88×88px for Retina displays
- File size < 50KB recommended
- Aspect ratio: square or 1.5:1

---

## Brand Colors

Use these in your logo:
- **Primary Navy:** `#0F2E4D` (dark, professional)
- **Accent Blue:** `#0066CC` (energetic, action)
- **Light Blue:** `#E6F0FF` (highlights)

---

## Testing Your Logo

After replacing:
1. ✅ Check on desktop browser
2. ✅ Check on mobile device
3. ✅ Check in light mode
4. ✅ Check in dark environments
5. ✅ Ensure text is readable
6. ✅ Verify on both pages (home & cases)

---

## SVG Code Example

If you want to create your own SVG logo, here's the format:

```html
<svg class="logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Your SVG shapes here -->
    <circle cx="24" cy="24" r="20" stroke="#0066CC" stroke-width="2"/>
    <text x="24" y="28" text-anchor="middle" fill="#0F2E4D" font-size="14" font-weight="bold">DB</text>
</svg>
```

---

## Where Logo Appears

The logo is displayed in:
- ✅ Header (all pages)
- ✅ Mobile menu
- ✅ Sticky navigation
- ✅ All device sizes

---

## Customization Options

### Change Logo Color
Edit the SVG stroke/fill colors:
```html
stroke="#0066CC"  <!-- Change this color -->
fill="#0F2E4D"    <!-- Or this color -->
```

### Change Logo Size
Edit in `styles.css`:
```css
.logo-svg {
    width: 44px;      /* Change this */
    height: 44px;     /* And this */
}
```

### Add Logo to Footer
If you want logo in footer too, add the same SVG code to:
```html
<footer class="footer">
    <!-- Add logo here if desired -->
</footer>
```

---

## Support Resources

### Create Free SVG Logos
- Figma (figma.com) - Free plan
- Canva (canva.com) - Logo templates
- Adobe Express - Quick logo maker
- Inkscape - Free vector editor

### Where to Get Logos
- Fiverr - Custom logo design ($5-100+)
- 99designs - Design marketplace
- LogoMaker - DIY logo creation
- Your designer - Custom creation

---

## Troubleshooting

**Logo not showing?**
- Check file names are correct
- Verify file is in same folder
- Clear browser cache (Ctrl+Shift+Delete)

**Logo looks blurry?**
- Use PNG format (not JPG)
- Ensure image is at least 88×88px
- Check SVG viewBox is correct

**Logo doesn't fit?**
- Adjust width/height in CSS
- Use SVG for best scaling
- Keep aspect ratio consistent

**Logo colors wrong?**
- Check color codes match your brand
- Verify hex values (#0066CC format)
- Test on different browsers

---

## Summary

✅ Your current **professional SVG logo is ready**  
✅ Easy to replace anytime  
✅ Works perfectly on all devices  
✅ Professional appearance included  

**To update logo in future:**
1. Edit the SVG code in `index.html` and `cases.html`
2. OR replace with image file
3. Test on all devices
4. Done!

---

**Current Logo Style:** Professional SVG with brand colors  
**Location:** Header on all pages  
**Status:** ✅ Ready to customize
