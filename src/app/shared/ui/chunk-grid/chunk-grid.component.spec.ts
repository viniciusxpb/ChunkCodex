import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ChunkGridComponent } from './chunk-grid.component';

describe('ChunkGridComponent', () => {
  it('should exist', () => {
    expect(ChunkGridComponent).toBeDefined();
  });

  it('does not set a gap attribute by default', () => {
    TestBed.configureTestingModule({
      imports: [ChunkGridComponent],
    });

    const fixture = TestBed.createComponent(ChunkGridComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('data-gap')).toBeNull();
  });

  it('reflects the gap option as a data attribute', () => {
    TestBed.configureTestingModule({
      imports: [ChunkGridComponent],
    });

    const fixture = TestBed.createComponent(ChunkGridComponent);
    fixture.componentRef.setInput('gap', 'md');
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('data-gap')).toBe('md');
  });
});
