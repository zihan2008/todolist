<template>
  <div class="page" id="centre">
    <div class="m-content bg-gray">
      <div class="pb8">
        <div class="person-total bg-white">
          <div class="person-cover-bar">
            <div class="fl person-cover" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNUNBOEZFNDdCNkYxMUU4QjIwMDk2QUZGNzkyMjYxNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNUNBOEZFNTdCNkYxMUU4QjIwMDk2QUZGNzkyMjYxNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1Q0E4RkUyN0I2RjExRThCMjAwOTZBRkY3OTIyNjE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM1Q0E4RkUzN0I2RjExRThCMjAwOTZBRkY3OTIyNjE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DkW6CwAAKS5JREFUeNpUewdwXdd55nfLu6/3h4deSQDslNiLKBZRvViSJdljy3Fir5ysnU1mZ9bjSfHE3p3ZnY2zm02csolTbCexFcmxumVZlERKFEmRIimSAAsIEiA6HvB6u6/ce/c7B7QzSw4ECMC775y/fOU/h8pb//vryGUy8IWCaF+3A0p5EenJK5ibKWBgaBjNeBdS185hLl/Cugc/g1hXC17+s29DXUxh7arVcPvcUFQd9XoTVikPS9Oh8CPY1hped9+nd5+6eHrb2y/9dP2u3qH+1pC3M1vIRYxAKFCp1OD1B0qxSCy3oNtzVy6O3LwjEh31utWPFzK5k3azma+YJtp27sPi0iJe+dG/whVVsXEwglodmM+qqJoWFLuK9hY3gpFuuQa3xwWzUsHY+2dgGAb4HzguHXrIB8eyoD29fxu8wSD0Rh1NOHA0A+MTi+hctR5B1NFwB5CdvAafUseRl19CTNVw4Itfg9XaipuXziOoaHKDtstAZjnVZTnKc/GW5J80PcE/XygWvtBmeA91Dg9uuDB+vUtpINTdljQKhTwURYHh9RlWzQopmVyn2tu14cL04qFAvfZs2Of5+lI2f79P16JKoTi73LTyp0ZGMNgTQ72pYGa+jFXdIRRNG6ZZRyzigccbRqPRhMvQUSlVkC2U4A4HuB8NFlQ0SjU0yya0//jMQzB8fjiOjUQkivkrl9Cs1jCwdReuj12GUspAbdqomyUMd8Qw+vNX+MAqDj3zRcw2mzj5wVG0+AN3Z1Pzf2Fazl+GWtse8PuD3dPLOTXavxoT7x+Bli9i74P3I68pmJ6aQyIcg66osFUFNv9Wi2W4HAee9jacuDQKw6yq7dFwd8Ny7jM8vt9RS+XtJcuZazrFWz6vG2PjBXBRaIu70bAU+N0aDE+QX1twuw252fmpJViFGorLRZi5KuqlOlRNhfblRw+ixBpZmriO1Mw0mstL6BreiMTwHRg7cQS5WyPwuHUUszkobg+6NuyAZtUw8fF72L73ngPNaOyH77z/7h+1BMNDg729KheIbLEE1e9FPpeHbTURZNTz01PoHRxEplxhJuoIBH1we71QuFG7ZsJkdhLJFvSsH8bYfApKegkt8RgsRVEtWxm6Pj//65pRu8frcU9kc+Yki5d5s9AS0eGwpTSXSJqoYBeTU8P05VtgLGGE/fDE/AgkQ9C9BrQH9u9APBqFJ9mO9MXzKBcKsJoNNENxdA5tQGp6HKrVYMm4Ua9W0dLRKfq9vbYw9X8vfXjsfyU6+nu3P/Q0rs1Oo5pNI82PTNVEs9HAtdFLKJYKGJuexSeXLqGWWcKWdcPQVWApvQg2INq7O7lgBVluMNjVC1TqSHZ2oOjxoDo1iaA/AJPVcGVhHl53s9elu349lakORiL+k5W6VqpXywizPw1PBJZjwdA1VComyvx+pCXIoGpgAcBWHFjZArSDq+Nw1cvw9wxC8xgIJrtx8cyH3Hge2+57TPQlJkfPw+vxQ9FdKKRTT5fSy295g+HtMzMzKNYb2Hf/kxg5dQzHTp1BtmpBd3mwsJRFKp3H6OXrKBQqBDYXKrUGQcWDtvYORKMRmf35mSnEEnFE2G9sT+RY8pnzZzB01wEg2YHZcx8hzE1fnJllVWhQbRXLGXNTOOL/D3zojUajcTke9cFFrLEsGy5iSZMVlJ+dhc3gNXIlOOxz3ecD4RTaV37rS4iu3YIls4w9n3mOm3wKPfvuwcLsFMZOvgsvF9Hkz7gLo2rW/g8c+zuJSNiTyuRlGWqBCH76439EIUXUXrcB2zavx/ZtW9Hb14syS7vKct29ZzcWFplR4kTI60Ek4EVbRzerxodKsYipyZto2k0EmAViIl9jIcdq69x0JwLrNmJqZBQzbCl/wGF16GyZOnw+t8dxlKdVxUqEQ+53NVfQsm3+nIhcLZeRnp7ns3S4Qn5obB/F40at6UD7wz/4BpqlMnKfnMalF7+Pk+++jWTvWhz83JcxvTiJk6+/gIjbHQyGQq85tv1ZjeXlZ8SX2Z8XJ+ZwYeQi/IaCfXftQWcizAUpzGgJo1zk1avXmM029HQm4dQr6GP59vf3wXCxPWoEkrrJyvFwIwEUufF0Nsvvm2w8Fzz+MFIXz2HVxs2YZS+eOfkBervisLipTNbka7zkFBWqau+IhPx360bgVWa46jZU5JjVdKEKnc9uOgqa3Gh5Oc+PIvTX/uI7CFbySEQTIB1gmhz2/W98BdsOHsRj3/gf2P7gMy3/+j//4E1nbnxrWziCouWgxAieGr2BiUwOe3cS4IgBN25MoGA2sJQpYIJlWa8Wcee6VdixcRCtiQgGEluhsb98oQBsW8Pc3JykFLEglT3t8wUJckXki2mEo2E4hg/eRBKXX38JFZ3lSMB0GcySWYVAJ4G4NgOhMgHEtbv5n3cB3MsyXyK5opgust1sGPw9g62qWIwjNYP2xF0b0dMWY+qDCG3ahyJBqysWpNgYwas/+kF4oL/v7Ue++vtbndZujF84jVa/D1NLaYyn0zi8bytW9fWjWHYwvZTHtckFXLoyDjc5e9+2Nbjnrh3YvGEdWjs7US2kYZaLWKJgyRK8VJZvg1mvMTABBrrBfi6bVALcwGJqkT8z4WPm3S7iRrGKOb42EtDYFQpyRZFhgcrsSZJ7JOwlSgfbmlbjsMcwni+Xq7XF6UUG1wdfNMBqMeCNh+ARG/7inn7kLRfc1RLyBKi66oFXoF0gYDTLhdeOvfrTPYWrZ7GdAHbH01/CrbERvPnWESRaY9A0L85dvokL4zO4MjGDEoO1uiOMLzy+D59+8lGs37YX/CWRAS4MMPNLqLF9ro7fwtlL1zExu4D0chqT7LdmvYaOBFGVmQwGQpidnaNqsxEIRFGz6rCNKnzMVJGbz1NEhEg3NjlY5YbDAW7EHYLVsNpJSztqpvl8IZOzwgEPdGKD0iQ/87VNVqT2uV1rUSZc+1hWFVJJxRWFm79Uq+b/3B3wPdPaksTiBMv3+FuwKT7+6p9/hJGxaaiGH+mKg6lUHo1mDX6thtVJN37t04dw76OPomPgDviCrQjFWlmKXvjZMt4A6YPZdLtUTE1NccNp5EwFSxQGF69PY3ZmjutoIuSjNGUl1Wo1VAiY3mACqdwiIiEFmYKDbI6UEw2yHYilSo0BMqAbUfZqg2ht9Julcjxzc+pndrUOixTpMDCa30MaVBgAbjKkNEWBw66z3isFlBuVp5u12lf5FH6vhraeAXJzFV/9zf+CRfZCf187xuYyKFRmGL0G4pSs+zcl8ehj92HnoYcQbR8i/yUEsoMqAy7dg3K5sJJtTwAqqWO30N4nz+L6bAalhsMS9SFVsXHmyjR601n2fZi/5yVemHyfSRQyJqksioGeADmWMrEpqoZlwz82FZb4I/pZFV84+Kqja8dcPt8LOpWX5nZJidmkYtR1CgoXuaBJMGjY5DO91mmahb9l8xMRbQntXpbWi6dGkOEGutrjKBFsUoxywmdhba8Xd28Zxr2HD2HgzgPwBJIA+dZWq1IvOwxYk/3IMEPl6wP+GAqeNOKxGAPXjSIpaDpdkOpMaPKaxSUvV1ltQDxMTmciatTGEdKRXVFQVIvoZiU11AB5vgKf6JUV4BJOgH3tMPP87A/8jeJ2nzBrtRmHRsWhmrTrfJ6ASMGHhl1n/4ZQrpnf5eoi4gF+RsdDqXhjbobEv4xELAICA2ZSBbh1GzuH/bhr6wbs2XMAie5VKJdMgY+w+bomQUir0kkx4A3RgwyeSyyK2Q3H2xBOZwg2C1IKRmheXKwm0cfFGnCLASjJBCgIB0XOFIKYg+pyGcsUFZVmBau6gIDXRZHB/tW9Mq1kLLlxldmsZ4oRq1n4c8b8SZXSTqO81dn3emaZOlZEgCU17zYOdrndT4QaFTS5aL4Hy6WBM9cn2YcePoz9Q9AQgmNTtws7Nw1h7cadcEfa6GIYZS7EYSbNsiqtmYfqRzcEXyrUzIJ+qHlJLYFoC1at3wyTZX3z1iwzNSVKjUHU0RoFilXqcAYvLYQLg+Bxk5aY/cVMUfZrCR7QQiEWoDsKeblRVepoUVGiT8X/GCxjPeh6gurxHmjqO6ooa/a0Xl0VQ42RDHV0IDcy81+PfzSKbRED24bXQWmUMTN3C1PktICfPFkWC6Cn5MbX9kaxfsNm6tUko0xfqposSdIGo+RhFm1Lo35VZNQFZ6qkF8mfBEQ4TemhB9esQZ2czp9gZHIedSUAAefdLQ6S5GuNARDlmaOQiQU9DBw1+BK/bgvBpFlIMyjhRpEITFpSdRlQ+Uv8Y0T8oLeA3bC+pdab7xhUeCWhpb/7z/+ALbvvQ3oxf/fy8tIfPfD4kwj29+Bnv3gZCbcXo9MLuMENe5mxKvsgz+byUPQf3NqDdevXEeuCsuQEEgvQEOLAw9fpBBzRLi5iRDDeynemJ63XIWuc2bIkwipoaWulgQ+hXsxiej6LNFVsqWZzA8QPOvQwuTgRj0pZGPG7UGUlxcNBMoAbuTLbhuWabIkxoAHphwNEdzHQWLx2C1aOlVqu9TiW/R78nluiAvS5t4+Tv+qYnFj+us8OI0x4f+izT6Fj9VqcfvNVjH3wEYScbMrFKgIfmD2xZhc/O/Kzqhr8UGSGRQtYDLOXLoXQjtFzZ5FOZajiDAoJsVCaBm4lQO+te2nZmJ2eNRtwt1mk4XgXR0fm0OTvwSGA8XteInZHS1xK1Do3HawzKDQmSX8by1Zn6yjSmNhclM5KEo6pQUOjMNhGPEBLS7fkcX+d3vt98iG0h/t8MKfHk7qq/fUar6E2Zsdw+tjbOLT/IYJKHP/yg38SkwkBCexdS0K7+HznUAyDA32SZxUBOFRCqkoLhhqsWglXzp7Fv/7geVy5+AmSCRXD6/rR3tWHQKxdBsixG7J8bREcfwjBcIjonsO1a5OYy5b5mhYqMC/qjRrlZkmWvsieizo8ky/QYzO4DLamklaJPysZbrCyNIqZDLOco6QkaAocqtUHGvnK39Sz5bL2+Xu2U8V4n2uYtYeU4jLUBnV1WzduXrmI53/4N0TotBTqgutEWTWoWioNG5tWJ7B986BcqMvthknRL5avuSxcOXkKF09fRjQZx8MP30ksqOLqyCSmxidRzi0TrUVgXBLgNC5Qp8b2UlG5+bm0tIg0nRiXTo0eIAdXyWhkEFq/JvEjzF5UWMYZKrRg0C9L28XXKXpQ+niD7VSis8pPTBOkTNg0EXa1wfrDHKNxSvtCv4344I7vBJN9PXZ+UYJEzeVDuVLC6XPnsViuE4RcRFSL5UK85Utr3HSc/rVWtXHpwjjqNB/JtrBApxURoGhYt2U9VncH8M6rx/DiLybw/NGL+OEbx/HBW0fR1+LH8J3bEGBv+5ldgS4Oy99PhySsqOHUoXGTJfI598JNmwh5FP6/JTcnepigTxpkyVNH+wJhahq/pEyDDimfWkIplZYzLYP2UI8EhUUMePyuf9TLljtszU7vVvQUokNbwIJH4eZVOg0LVboa0ZsW+6NOHrUFyrKPfeTO6dksYu4b5EkKcy0PLwpo7V/NTbSjvX8NSqUGRs9ewoWzN7HxgcdhssS3rh6gSFmHO++9n787DBfBS7gqi2zQbDaZADdC7O2WRBzDg724QZ/88bV5ySIFAlnC55COctJXB1h1umgJiiAxmJDwLBiBP3OYIE9bAn62RJU2FHJg6N7tpNJhveBp3+M3DK0uxjLsEz+jTu+Lq9fGyIWEcQKRoBONINAUZcWyKVctZkPH43e3kbYqGL+1hJnJKQwNT+Op577JwBiYnB1Flqpp8/ZBRK1F7HhoO3r6ehEbWIcQpadLUBg1uMVylz6P/GXWaRCCIWKLjh2713MN45im1Gxf04HJxQJCBCCPi9qbNOUiinvpmARQ2aw4hd93JBmr0mNXlnKoWhmuXzCIC1aS4dG0Pbrf792iuv0oN9kL6Xmyh8qHaGiYJiyFCEyrJ4WDmIgJy82fR30KxqZK+N5PLiFVUFEhFV2fTGHHhInf/jb5mxtenJtGtXMVjI4ueAlSHqopJ9yOYKKfIBMhQFVZviK73DRR1eaHZdKEhMPoGxzgBnwY3rgJraSkK+PjaNS8mCs20BNWSE0OMsUywmyFoOYTUg4GKavRYGbdwvuSrhgID0ta9LtKStXY+6aDbXrY69pYohivOYxKZpKEHedDqJaKeQnvYoMiuwYjZXJxGkvcIeiIyL53s4HuRIASsxsDYRsH9u5i+9KVOC4MDm1Ga/caNFmOtXKWgsOi+E8gQBqyy3mKFQbUsmTFiL4XX4vWEQIi2dXDPXhx+PB2qNUBnH4/humfHkGwPYY61+S2TVltFa47GKQTI90IbBEUL4aHDaGnxainzvKmmlOosNRcSQR2vb6cN/uXGdloLI5kbx8WUvMIbj8AX8cM9fVZWLd1qtioLkYT7BEBbG4PwYNca1gV9BtpHDowhPZVQ+IdCUA20TKIhD9Ci1dBnbobAlBYdo1qnpsXKM1vkcctigUJdKoq+VtTNUlbDWa/3FzGMKnv47kyjl7P4t4NBhKCvhSvBNImX5fNFWBk8/AY1PksbWF2xDCvSj1uiN4WczIRCq6beNSvd+8/1JFhOS7OzzIKTcxfPANPKI5quSYRUSXl2PzlcqUusy16zWCZ1LlQDzfc2xlAtKsNjq+bppxCWIgGqqE6ET9fXCJVlEAvxjdlqSFI7tTEdJZf83e4YbFIR6K/JjcrfigdT6WMscU8fv8v/x5vHT0jtfGN+Rx6iNzBaEgO5eLU0YaYOYd8iLaEscCkGKwgOXCgWXCxxxVWphgtuShSKHE79V1PPBu5S9HRoKFPTU7gk9d+gMrYedz84G0ukYqIRtusidLLo8IgiE37+eIm39iksO9M9OLO9bu4RwXJ1nbqRR8T4CWKRvjmYcxNXsLszRMIx6IUKd2sjCgXRGxg5QiwERuGYEnRJh6+Y4MSlK0jDEEmb+L9D88xq16WO9teiE3iUrFYQSorRkMGettiiFLEGGYeQYUKi6LH0LlJoribPxdqTKguwT5mOhvS2irz//3G2DXY6RR6+vsxfPBRdNx9Hwp0PpOkJz8VTTzeghxdkhABOkspRBQUCmkxW8Hm/nY8vG8bLaGHyOuCXxjyco6lW4Rw41YlB5M9FEi0oZRboHjI8RlUbux1YRltobicFYcjNm6RnorFAkFMjGJ1fDwyTtNSoRRmnXDTFIPyUEyMeoV3TmcKrMY8ShbrJ5aAxpbysKKCFDS5xQwqLHkhQATwltNFt3Z4+/pvpWkOxj4+gZET7+Dau2+S9DXsffIzKNSL+Pj997FxsP9XE0k/5V2QG3Z7VMxTAvpY3vfvXAeVIj89P0Hln2F/efDm9/8Rr//DX6CjL4n1+x4mWq7IP5Miom4uwUWfzW9gxU2s7FdMX0T/5bJ5CXIBvxfvfXQBaWYzyGwVTQoev0diiQDUWNgnaUgEnxAPT7wDljeCKVpO8iylbIvEmwZbxWClKoZe1yNeb6lSdQKpXI4SkxJRKeHEi9/DsVf+BRkipuMnQs7OYnVHC2YWMuQ4tzwE6+vuwDJL6+zYHMZuTGBowypobuCTC6dgXL6IjnVJhAd2IjJM39usI5uZh8fjYq/1IjV7Ba6yOKL1S/UmdisO85pUVwJlLaZS9LTP52FGdamgQBYRQqNQa6In4kW2XEWWEjIaicDN39HsOmp0XH4Kn2KthsXpFFpiMYTY75ZeQW4pT3eGkqo5di47P40W/sAjcJJQHqJB16hzs6OfwE2OG5lOo1ktY9NgJ9pbW+DRHFTNJjpb46iwzF59/zy00hLqhP4SF3TpxnlcGPmIiw5IKhIlGE/2YPTIWRx/6QfwREW2udk6S030KwNisbQFdosBvc331t0rgwMPS7gqfAazGmB7CbkpekWcYIig5PIltoxJgCWbcMONaoHCxYBVqmHq+jQ/5uAlL4cV4kW+XNQXi9W5aCDUFSMwlEplyWcaFxgipHfQ3MNJ49zUPM5dmyFABREJhaGyvJrk6f7OViwsZvHi+9ewc20S/e1RLs5Bf6gX7UoQq12dmPvpG1i4Pkl6cmOeym3gSZoJLShL17ErwklLVLXtmrR4plmVI10PMcFtONyYT+gKibY+CqJyiZ7ctNEScKNGW2sQU8Q8W82UWB1NuCLzkhZZbLKCTJZ+kcowKPV0YFG7Y7DjcGsoskEcgTpiPEEaon2RU4gCDQRdlCRv53ajOU1TllyVZSP+X9wcWChQXs5nsH99B3Wviex4FqWxDK6evYC581dp5eKIdPRi83OfQpytABPSYIihuvir8v0EeFVpBsq0fi4qI3Hs6ve5MXLlOs5emaT5NygnFTnGMQnVAa5TAFwrHZWYetpckxAgojKFKCkT9Lxhv2QZI0gLzPfTapXj6pr+gZFcellGXJKz05RHjqrhkQM2oUWFynLx4TaBK02qmF4uscxzmLy1CM2sYG17GCNTeXz/nTFs6G1F2mVidn4ZcYLUXfsPYfunDqP9kY00IwWYYhgueJElqOke6aVFZmvlEirsSVVZOUYRnGzQSXV1tdMoikEoe5wJaaVZEacUaZYsE0sEN4nILmknqUeRSecQMix0dychuEThc2vpDAyh6CrmqJ5OZ876uAAxknUTkITEEyMNoViE8feQyMU1glqZbkbEhH/dXFSINCFGrEFq2iD7aU0yhFdO3kCEAv+RvYMw+v3YsGo9mgEN094U6qVluKshauWkVFL/PgZmj2aXUEynIbygW/CzqC9hWqgPOjvaWNorw2bhicWMLup3o8TgO0ShVMFBX4KOjTS0kBFDAje0gphh+1jWIbJCWQ4tLFaRFQl9rM8uLp9Y7XdbhHpNlKpYhJB73C9sARB8A3G4lSoWZVk3xTCKX8XZxxb5s8DIe5SmHIDHaca/f3QMi+kSvvLUHly35lCdr7AUDbR0DsHf2y4pRWRWjGQVqiqzkEUhm4Xu9ZOqCFSOKudd0paKlvH65bxaF9qEf3MV0hFLvem45RqFnl7MV+SppWi8akXc+9BQY0nHxdENxY+oILfHY9Vr9ZNquVoi6blOKmKiQYfkCAEhEFLqAPYXRbiP3Cc2VGdZC9YU6Chkobg1I0zULM32KGXfshgq88+bl+bwly+cgEHa8igBdPbfgWTnINHTx1J1wxDCR7dQzqUwOzlGJVeB5hLXFgzZz+LN5WCd72GIGzj8XoXV5GUFiNIW4+IoA26T7y0xkBCjJ3mqScAzDLnG1FIZc3NZBoSYQr2wnMqerJSqOe0bv/efcX3uRng5l31APFjXBVgEhLLnm1ThCnrlmSy85GizJsuDxSAXUeLDRvngFiLg3j17sHXLnWhLROUJ5MjUMpzMEu7dwe/1r+ICdcRjQfhYn2NXLuGT0ycxS9unMnVC/smTCZEyOWOmGSWIetgqAnlfeet9lrCJmF+oORVlUl/YJ8qeSM2sChNhCOPPZZaIygG/nyXuQoGsI4BOE8mq1v60XmucUoRQH7t+NnnlyshsdvqmvjQ1gWq+CK1alaXtDYZlmc8sLmDq5qREP9Fby0sZ3Mg28Y0//AP81n/6HbQkk/jlH3GZZV6cVnzwLkrn34XWqICyA0XKPyefQWpmHGF61cHB1WjrbKdvDcqBgC8cI7K2kIN90qR4ufBaPo+nf+v3cHN+EavaKDK0lcmpzxCVF8YSSTpfq2NNRyvKCwssZQoXVkALfbSbiWk0qyQelT2ndVIWp7RurzBPannLhq07N+45ONS/4Q4k+nvhTrRAYUTzlTzEXY7C4jLK5bocTgh5mM6a+OGLP8GXvvbblJv+2/LQlrThofRMkMPXb9uJ9fc/hZpi4IOPzuG7z7+B41enMBhW0dWdgMfnldpcjHrFGZIYwtn1ihQgjtDZ/P9IwIc33juJiYU0OiM+aR4Mlyp7VpSuqDShtbcd2I/O9iRSt6b5LJ1tQo/PatSEePHobyqG63t1lr5236bVuHHqXVw68toM3c9viBmRT/ejZ2Adhu7Yjf4NW+CLJ6CztBUKgWK5iGvjy/izv/4zPPLsbzAAFayoQ3WFp+XGnV99iIlk95qNePgzz+J3P/c4vDQQk+PXUWdwxIG1QTnrD8UQiK9kVgwBLHHwRTkpELyjrQPnR6/j3JVxtEb88HOzYpgnxkBu2Q4G8aTJCmvF8Ob13KwLOVaDOIXQbw8tgh7tuUAoeEucLWtffvoR7Nq+D+lC8VZpceZwKZfpGTt+BDc/eg83LpxBMUP9TDNP74YQN66R4zZtHcLvfvtPpWC3FV16W2mNhNFdObj8VXnLYNhiKmnCm+zG/gfux+rebpjkzzrLUSHwCKASjqdOwS/QtVphdool8n6V2rsN4priq++doPjwwkf6EefLBUpgnaXrZqZjxI32rm4IDxloSciD/VJqkY6MZe/xHmfgvxX00+WFQtCrtGL1Zg0R+tWl+clv6ZXSkSDLUSw5xT6cvTEub+FlqKYaegBWwIUvf+VropiY3ToXbMh++9XulBXOXPlQVz4zUw6Bxi4vQ40ksOPRZ4jcq7E0N0swDFACL6NaoDjw0JcTsdMp4sXYFSxcPov0+GWsGt4Gn8AGlm6YZsarNhCmEcnTdnpdBDCVlZdbYrmvjJEqzK6XVNpkWedKlW9HudFCrsrSrkOvFwVAFaif2ezlyjuE+ZeKtvJEmGAViMTQpBJyauLoYxE3aLt8nn5sYJlbpTQtYXxFjv7yBEu5vUE58FNuf70yXhG3+CxKVaeShuilZHc/OjftQHV5iWVXl1S3MtNmouSm5zBBNAdFSZjreOTeu/DC28eR8OThCofhUizZ/+JeWG1mFk/s3oU1W/fi9Xfew9zMLaQnlrGqO/KSz+05UijTxrr9bMcGtH1r+tG+aphvSpE9dwueQODDWin/JbNa8dA3MrumPHEXi59LLWFo4xY89uSTdDV1uHxBmVQxj5JHlb8sZcrTf9/8SjAUZrkprirl0/Al+2AW0wxkCZ5IKxWcLXtdnBGLOZfqcqOjuw9De+/B4K7DaOkZwqOPfgr3Hz5I93MFk1PT8j6WGAYsU2IKTe2itfzsk4/j7v0HMTC4DpFwKLe8lH5saXa64Av45drEaFdbl/RTBfUh0tqJqavnxU22gm3bE/Vq9ek6e0iQuzjcFlOL5VQK+++/D3fs3Uet7SY7eeVGldv5VH71H+3/L2k5JF/hb1tkUxOToBDqS9NwxZK3Z1wrfKlrLvm1uE3XKOTQpC4Sg0GFLxq4czuCqoXXXn4JrgBlKmlbDAlKdQfpxXl8dPpD3Ld3F3Y+/Hnc96knvvj0s792ssgAHz/ygRjEk9cNaPdu6pfXNBWagEpheQVyDO8ol9jaaDa2Nxh9oWQEv+Up7g88+CCGNm2B4omx9HKYPv0z5G6cQn7umjxP9kS7Vq46iAzL5Cq/hC+pnsTMu8nM6sEYNPphcf3QEceYLHlx2ijOhG9HTh6FinmUhEQxjNME/6dw9Bev/wrRxU1acRppGF5kqcePfnAMW/tifx0NRf9YvHb/pz6HxcnLeOudM2hrjUD7/D13sWQGacQr8liiRMGhyFmT/bai6vvsutlXoW2rUVeXKhXsf+hh9G3aianzR/Gj3/t1XH7j7zBz5SyuXDiNT47+G5rpm0i2tVOhta5kX2x+xVvKebZYviNu2wn+FVXC79fKRXk66QrGhYCXVxYceayz4pzkM+S9OyAYa8PVCx9hemoKlaYiz6TEoVuO/dkWj2AmlX3/F0fe+XzArVjx1jYEWzqxb88uvPDP/4AKlZf2yK47YKzfQ0WTQWHqGlHTJ08CCCQWS/l1fjzIxbYK9aUyqs/85tdQmbuC46/9GDNE0hjVjzcc4RsT9OhLb42ex9iHb9ATn6bL0hDuGL69cU3KR5E7m4GT82IxUpVHrCrxYwz+9gEh2GW/C6qTPC6UlaKv3Nah4fB19JCKVBz9+ctw+aPShAj1ZfF7pbJ5aU1f20Mjk6nSueNHce4EAWz8Ejbv2IXBVQN48ccvQdsQ8yHGpu6i4kpTmdjiHgZBR5O3Us1q07H/jThybzqbaUv0DePTz34eY+dZwoUicuxBX0DeUUU43oXeDXuweutBhFoHkGW/3/roCGbOvIVmJYNo12pm1C8pCtTgIIAo3iB72oQ7mERu/ILoXLiT/QC/J0erzsr4Vpa4GBiICyuswoHN23DpLLX45CQ9NstZFXbVdSlfsw/7XfpyiFK1SpOx+46NOH3iON74yT8R6UlNlKm61dWDS5dPY7RZx4LqopYghDPKGhlC3GILh/wpp9Hcn89kX9754NBBnT9w9CA8oaQsUbGoUKIbHYMbEU50ws+S81I5ef1PEadULE1eRerqWXz0d99C2/qdGDj0WWiRFjSyc/I0QgCcbRYQG9qG/M1zCPZukseuYqOKrYmiEBdIZU+rzLQAM3FF+LGnnsXJY+8iluxBLpv+IOQ1HvcZWmYqU8EdA0mM35pDjvv44+/+PX76w7/F+aNvokFa1L7y1eegJFqxavsubFrL8uOG1KAfVaWBVCmHEgPRUKza+MTs8/c++lh0w5aNO5aoa0uVOubGziCZiKNzcD380Tg1RESe5ntZqobuFioH0Z5V6NpxCJG2XiyzvBZGTyG+aj0taJC8nJeUVq8U4W3pQS2bYgwqcMe6iMx1OadW7JV59UpbQGZeYSJ6htbj+Lu/oNHJ/hXb91lDc0od8QBmueGa2cCGwW68/LOT2LSuB8984SsYXruBoLYIbXsygBgRM5LowsZtd6OVpmF43SasWbMW7T1dGNywBj0MRLiz1dqxe//PWiKRy8Vi5b5MJu9ZHD+PVUOrWc40AqQJcYovLrcIfSyG8vKGFRfnMLJunw/JDTskPsyc/4C93ScvwDiUkiJ/LtKUymoxM3PwtfZK9BYDRVnWuP1JbppPZZa1UKyQSS1+4b2fv/Kdts5uS6iwIJVahJp/armE9rCH2l/DuXPn8MgD96Jz1Uas27CJwqOLfLg4i8uXLuLa1ctYPH8CI2c+xtjFUZTEJfByQ15J9HujVFgbabWUy1RKP8hlC+3FuSsb+1b3yqG6mws2PAG5YUE9qhzRrFCTXLg4Wy4XECHnC56du3IOLas3Slkq70jSg2sEC6ecY28bBLSVmwGSoSWl/5LexGVV7cd0P491tLZ/9M7r/4ZgiChNAZLNFtHd4ofNYF+7lca2NZ0Yn5iCz+fHOiatSrGjiztVYl3hchqYa9JcV6FSXdX45hmKhRxFfLlMuiqZOHTo8MqxpFOfN1zG50Ph0Pd0j/u/kSDvovGE0mxKgWEzq8LqSSkhUNZWVo5dCTy13DJpcADlQpYlPspn8fdpCHwt3TKLnmiL/PdPSqCFgk0Rd5ukfBVTDhqyD/npm46qvIdSAW2rh7H30L34+Ss/wUD/EG7OzGM5X0VPLISFdBlnr85iuL8dFy+dx0Pph6QvUNXbfeFjL3r9BnTq1CY50hf0wUeKikQi8NCvhgJB+Pkh7kIp8jTQFiOgo7ru3seIH2Ba37Dl0porwkroYkFDUmgJb9uU/2RH3gYq5hGMx8gIDhauniOYFFfKVhiuWIs83rTrZTlokIMvXXmDKT5AgLlLbFYE3bmd8YeefJZAVqMn96KDPCxmXgLY9m3sYeX5MbtUIWNM4Zb4VzVDm/hsXcx7VfFPGqSSEVd9amJUQv0sPKngPvEvxEQw/PIKrphsVqQ1FG8srJ2quY5RpDzCzfSz975OBXRSnPas+OSV8a/YuXNbQVkEJI1lJ27cCMPgDkVvew+iMqWs4vFS2lVOksK+zmf0O5r2CF92bMWCqiu9LMZBVIdbDxzGxq27MTs1Se/cIoFyKlWgkCpj00ACYYLp9Owyjr39quR3VYwvxXCulsuikcuTM00EyGM2H9xg34mpgaAGh4vMLIyyJFw0DgWYpZS8hLJy1MkFiOs2UKbspvUntmPv4QaFbKJosb/JCniBKHuGS53QFDXLrTcYiAbFStYbiU24/f4zfIcX+PBv8o0fhMcfJ1zvoST5E/FM8Xxb+/cetm9fG3YaK5flHv70s5ifmpdTz+FVvUjRCi4sF0j1NQz1JtBChvjg+AlcOP0e/p8AAwDv4RSYCK5EsAAAAABJRU5ErkJggg==');"></div>
            <span class="fc-333 f16">张三</span>
          </div>
          <div class="person-total-main">
            <div>
              <a href="#" class="right-arrow-icon white f12">总资产(元)</a>
              <div class="pb20 f20">622,022.21</div>
            </div>
            <div class="of lh20">
              <div class="fl" style="width: 50%;">
                <p class="f12">累计收益(元)</p>
                9683.21
              </div>
              <div>
                <p class="f12">冻结金额(元)</p>
                9683.21
              </div>

            </div>
          </div>
          <div class="person-balance-bar pt8">
            <div class="fr">
              <a href="#" class="person-btn blue">充值</a>
              <a href="#" class="person-btn">提现</a>
            </div>
            <span class="f12 fc-666">可用余额(元)</span> <span>1,982,200.00</span>
          </div>
        </div>
      </div>
      <div class="pb8">
        <div class="bg-white my-invest-tab">
          <div class="my-invest-tab-head">
            <a href="#" class="db right-arrow-icon fc-666">
              我的投资<span class="deadline">待收本息 <span class="fc-222">502945.13元</span></span>
            </a>
          </div>
          <ul class="flex my-invest-tab-ct">
            <li>
              <a href="#">
                <p class="fc-222">持有中</p>
                <span class="fc-red">5</span>
              </a>
            </li>
            <li>
              <a href="#">
                <p class="fc-222">申请中</p>
                <span class="fc-red">5</span>
              </a>
            </li>
            <li>
              <a href="#">
                <p class="fc-222">可赎回</p>
                <span class="fc-red">5</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pb8">
        <ul class="centre-subnav-item bg-white of">
          <li>
            <a href="#" class="db fc-222">
              <div class="fl"><img src="../../images/centre/trade-icon.png"></div>
              <div>交易明细</div>
            </a>
          </li>
          <li>
            <a href="#" class="db fc-222">
              <div class="fl"><img src="../../images/centre/trade-icon-2.png"></div>
              <div>我的优惠券<span class="fc-red">(15)</span></div>
            </a>
          </li>
        </ul>
      </div>
      <div class="pb8">
        <ul class="contract-item bank setting bg-white">
          <li>
            <a href="#" class="right-arrow-icon fc-222"><em class="fl"></em>我的设置</a>
          </li>
          <li>
            <a href="#" class="right-arrow-icon fc-222"><em class="fl contact-us-icon"></em>联系客服</a>
          <li>
            <a href="#" class="right-arrow-icon fc-222"><em class="fl about-icon"></em>关于我们</a>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/footer'
import '../../style/layout.css'

export default {
name: "centre",
components:{
  Footer
}
}
</script>

<style scoped>
  .centre-subnav-item li{position: relative; z-index: 3; float: left; width: 50%; border-bottom: 1px solid #eee; line-height: 44px;}
  .centre-subnav-item li:nth-child(even):after{content:''; position: absolute; top: 0; bottom: 0; left: 0; border-left:1px solid #ddd;}
  .centre-subnav-item li:only-child{width: 100%;
    border-bottom: 0;}
  .centre-subnav-item .fl{margin:0 14px 0 15px; width: 16px;}
  .my-invest-tab-head{border-bottom: 1px solid #ddd; padding:0 15px; line-height: 36px;}
  .deadline{ display: inline-block;  vertical-align: 1px;  background: #eee;  font-size: 12px;  padding:0 10px;  margin-left: 6px;  line-height: 18px;  border-radius: 18px;  color: #666;}
  .my-invest-tab-ct li{padding:16px 0; line-height: 20px;}
  .my-invest-tab-ct li a{display: block; border-right:1px solid #eee;}
  .my-invest-tab-ct li:last-child a{border: 0;}
  .person-total{padding:8px 15px;}
  .person-total-main{padding:12px; background: #007bff url("../../images/centre/person-total-bg.png") no-repeat; background-size: cover; border-radius: 5px; color: #fff;}
  .person-total-main a{color: #fff;}
  .person-total-main .right-arrow-icon.white{background-size: auto 7px; padding-right: 10px;}
  .person-balance-bar{line-height: 36px;}
  .person-btn{display: inline-block; border: 1px solid #666; border-radius: 5px; padding:0 10px; line-height: 22px; font-size: 12px; color: #666;}
  .person-btn.blue{border-color: #1480df; color: #1480df;}
  .person-btn:last-child{margin-left: 3px;}
  .person-cover-bar{padding-bottom: 5px; line-height: 26px;}
  .person-cover{width: 26px; height: 26px; margin-right: 8px; background-size: cover; border-radius: 100%;}
  .contract-item.bank{padding:0;}
  .contract-item.bank li{padding:0 8vw;}
  .contract-item.setting li{padding:0 15px; border-color: #eee;}
  .contract-item.setting em{display: inline-block; width: 16px; height: 16px; background-image: url("../../images/centre/setting-icon.png"); background-repeat:no-repeat; background-size: 16px auto; margin:14px 16px 0 0;}
  .contact-us-icon{background-position: 0 center;}
  .about-icon{background-position: 0 bottom;}
</style>
